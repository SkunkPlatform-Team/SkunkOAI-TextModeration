<?php
$url = "https://sp-api.netlify.app/.netlify/functions/moderate-message";

$data = [
    "prompt_moderation" => "Your message here"
];

$payload = json_encode($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type:application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    echo "HTTP Status Code: $httpcode\n";
    echo "Response: $response\n";
}

curl_close($ch);
?>