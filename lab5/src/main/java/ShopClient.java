import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.http.HttpClient;

public class ShopClient {
    private static final String BASE_URL = "https://petstore.swagger.io/v2";

    private HttpClient httpClient;
    private ObjectMapper objectMapper;

    public ShopClient() {
        httpClient = HttpClients.createDefault();
        objectMapper = new ObjectMapper();
    }

    public void createPet(Pet pet) throws Exception {
        HttpPost request = new HttpPost(BASE_URL + "/pet");
        StringEntity entity = new StringEntity(objectMapper.writeValueAsString(pet));
        request.setEntity(entity);
        request.setHeader("Content-type", "application/json");

        HttpResponse response = httpClient.execute(request);
        // Handle response
    }

    public Pet getPetById(long id) throws Exception {
        HttpGet request = new HttpGet(BASE_URL + "/pet/" + id);

        HttpResponse response = httpClient.execute(request);
        // Handle response
        BufferedReader reader = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
        StringBuilder result = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            result.append(line);
        }

        return objectMapper.readValue(result.toString(), Pet.class);
    }
}
