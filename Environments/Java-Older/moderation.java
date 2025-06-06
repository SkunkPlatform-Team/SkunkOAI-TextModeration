import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.HttpResponse;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class SkunkOAIClientApache {
    public static void main(String[] args) throws Exception {
        String url = "https://sp-api.netlify.app/.netlify/functions/moderate-message";
        String json = "{\"prompt_moderation\": \"Your message here\"}";

        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpPost post = new HttpPost(url);
            post.setHeader("Content-Type", "application/json");
            post.setEntity(new StringEntity(json));

            HttpResponse response = client.execute(post);

            BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));

            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        }
    }
}