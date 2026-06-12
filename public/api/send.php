<?php
/**
 * Принимает заявку из формы сайта и отправляет уведомление в Telegram-чат.
 *
 * Перед запуском заполните переменную $botToken ниже.
 * Chat ID указан в ТЗ: -5122712836.
 */
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

// === НАСТРОЙКИ: вставьте реальный токен бота =================================
$botToken = '8442638752:AAEBDemlWQWj-n1nrhXsJd-tfzg-_jrU5yQ';
$chatId = '-5122712836';
// =============================================================================

$input = json_decode(file_get_contents('php://input'), true);

$name = isset($input['name']) ? trim($input['name']) : '';
$phone = isset($input['phone']) ? trim($input['phone']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$website = isset($input['website']) ? trim($input['website']) : '';

// Honeypot
if ($website !== '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Spam detected']);
    exit;
}

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Name and phone are required']);
    exit;
}

if ($botToken === '') {
    http_response_code(503);
    echo json_encode(['ok' => false, 'message' => 'Telegram bot is not configured']);
    exit;
}

$text = "📩 Заявка с сайта deti1.ru\n\n";
$text .= "👤 Имя: " . htmlspecialchars($name, ENT_HTML5, 'UTF-8') . "\n";
$text .= "📞 Телефон: " . htmlspecialchars($phone, ENT_HTML5, 'UTF-8') . "\n";
if ($email !== '') {
    $text .= "✉️ Email: " . htmlspecialchars($email, ENT_HTML5, 'UTF-8') . "\n";
}

$payload = [
    'chat_id' => $chatId,
    'text' => $text,
    'parse_mode' => 'HTML',
];

$ch = curl_init("https://api.telegram.org/bot{$botToken}/sendMessage");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($payload));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($httpCode === 200 && $response) {
    $data = json_decode($response, true);
    if (!empty($data['ok'])) {
        echo json_encode(['ok' => true]);
        exit;
    }
}

http_response_code(502);
echo json_encode(['ok' => false, 'message' => $curlError ?: 'Failed to send Telegram message']);
