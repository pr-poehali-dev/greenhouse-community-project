import json
import os
from typing import Dict, Any
from datetime import datetime
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Создание заявки от клиента
    Принимает: name, phone, email
    Сохраняет в базу данных с временной меткой
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    # Получаем данные из запроса
    body_str = event.get('body', '{}')
    if not body_str or body_str.strip() == '':
        body_str = '{}'
    
    body_data = json.loads(body_str)
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    email = body_data.get('email', '').strip()
    
    # Валидация
    if not name or not phone or not email:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Все поля обязательны для заполнения'}),
            'isBase64Encoded': False
        }
    
    # Подключение к БД
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration error'}),
            'isBase64Encoded': False
        }
    
    conn = psycopg2.connect(database_url)
    cur = conn.cursor(cursor_factory=RealDictCursor)
    
    # Вставка заявки в БД (Simple Query Protocol)
    insert_query = f"""
        INSERT INTO t_p24790087_greenhouse_community.applications (name, phone, email)
        VALUES ('{name.replace("'", "''")}', '{phone.replace("'", "''")}', '{email.replace("'", "''")}')
        RETURNING id, created_at, name, phone, email
    """
    
    cur.execute(insert_query)
    result = cur.fetchone()
    conn.commit()
    
    cur.close()
    conn.close()
    
    # Форматируем ответ
    response_data = {
        'success': True,
        'message': 'Заявка успешно отправлена',
        'application': {
            'id': result['id'],
            'created_at': result['created_at'].isoformat(),
            'name': result['name'],
            'phone': result['phone'],
            'email': result['email']
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps(response_data),
        'isBase64Encoded': False
    }