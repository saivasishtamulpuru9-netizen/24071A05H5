import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FoodServlet extends HttpServlet {

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String items[] = request.getParameterValues("item");

        int total = 0;

        out.println("<h2>Selected Items:</h2>");

        if (items != null) {
            for (String item : items) {

                out.println(item + "<br>");

                if (item.equals("biryani")) total += 200;
                if (item.equals("idli")) total += 100;
                if (item.equals("dosa")) total += 150;
                if (item.equals("upma")) total += 50;
            }
        }

        out.println("<h3>Total Bill: " + total + "</h3>");
    }
}