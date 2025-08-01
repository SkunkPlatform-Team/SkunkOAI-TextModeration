use Illuminate\Support\Facades\Http;

public function moderateMessage(Request $request)
{
    $response = Http::post('https://sp-api.netlify.app/.netlify/functions/moderate-message', [
        'prompt_moderation' => $request->input('prompt_moderation', 'Your message here')
    ]);

    if ($response->successful()) {
        return response()->json([
            'status' => 'ok',
            'data' => $response->json()
        ]);
    } else {
        return response()->json([
            'status' => 'error',
            'message' => $response->body()
        ], $response->status());
    }
}
