import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Получение списка всех заявок из базы данных
    Возвращает список заявок с сортировкой по дате создания
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
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
    
    # Получаем все заявки с сортировкой по дате (новые первыми)
    select_query = """
        SELECT id, created_at, name, phone, email
        FROM t_p24790087_greenhouse_community.applications
        ORDER BY created_at DESC
    """
    
    cur.execute(select_query)
    results = cur.fetchall()
    
    cur.close()
    conn.close()
    
    # Форматируем результаты
    applications = []
    for row in results:
        applications.append({
            'id': row['id'],
            'created_at': row['created_at'].isoformat(),
            'name': row['name'],
            'phone': row['phone'],
            'email': row['email']
        })
    
    response_data = {
        'success': True,
        'total': len(applications),
        'applications': applications
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
