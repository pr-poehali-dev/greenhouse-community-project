-- Создание таблицы для заявок клиентов
CREATE TABLE IF NOT EXISTS t_p24790087_greenhouse_community.applications (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Создание индекса для быстрого поиска по дате
CREATE INDEX idx_applications_created_at ON t_p24790087_greenhouse_community.applications(created_at DESC);

-- Создание индекса для поиска по email
CREATE INDEX idx_applications_email ON t_p24790087_greenhouse_community.applications(email);

COMMENT ON TABLE t_p24790087_greenhouse_community.applications IS 'Таблица заявок клиентов';
COMMENT ON COLUMN t_p24790087_greenhouse_community.applications.id IS 'Уникальный идентификатор заявки';
COMMENT ON COLUMN t_p24790087_greenhouse_community.applications.created_at IS 'Дата и время создания заявки';
COMMENT ON COLUMN t_p24790087_greenhouse_community.applications.name IS 'Имя клиента';
COMMENT ON COLUMN t_p24790087_greenhouse_community.applications.phone IS 'Телефон клиента';
COMMENT ON COLUMN t_p24790087_greenhouse_community.applications.email IS 'Email клиента';