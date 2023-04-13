# Requirements

The only requirement for this project is to create a GitHub Codespace. See [Create a GitHub Codespace](../README.md#3-create-a-github-codespace).

# Description of the activity

This module represents the backend application destined to provide the necessary information for the ranking application proposed in the activity. The technologies with which it has been implemented are

* Java 17
* Spring Boot v3
* Spring Framework v6 (web modules, JDBC and test)
* H2 (embedded database)

# 🚀 How do I run it?

To run the application locally, you can do it in several ways. In any of the following cases you may notice that the application tests *fail*.

Your task will be to implement in the code the exercises shown below so that these tests give a positive result. You **MUST NOT MODIFY** the tests, only add the implementation in the application.

You have annotated with comments (`TODO: ...`) some reference points inside the code to guide the resolution of the exercises.

## IDE

Any of the IDEs mentioned in the previous section provide support for running Spring Boot type applications.

Simply right click on the `ZboostApplication.java` class inside `src/main/java/com/inditex/zara/` and select the option to `Run` or `Debug` the application.

To validate the application, you can run from the IDE all the tests contained in the `src/tests/java/` directory. For example, in IntelliJ you can directly select the project, right click, and `Run 'All Tests'`. Other IDEs have a similar system to run them.

**¡Ooops!** :fearful: You will see that there are several failed tests. You must complete the implementation inside the application to give a positive result but you must not modify these tests.

## Terminal

1. Open a terminal and move to the root of the project. For example, if we have cloned the repository inside the current user's `projects` folder:

```shell
cd actividad-backend/zboost
```

2. Inside it, you should be able to see the following files if you launch a command `ls`

```shell
> ls
assets  pom.xml  README.md  src
```

3. Launch the project build with the Maven wrapper script:

```shell
mvn clean install
```

**¡Ooops!** :fearful: At this point the operation should fail and should show you that there are several tests with errors.

As part of the exercise you should complete the application code, but you should not modify these tests.
You can also launch the project build with the ` -DskipTests` option so that the tests are not executed and the operation finishes correctly:

```shell
mvn clean install -DskipTests
```

4. Once the build has finished successfully, launch the following command:

```shell
mvn spring-boot:run
```
5. You are done! The application would be up on `localhost:8080`. At the end of the log that is printed by console you should be able to see something like the following:

```shell
2023-02-17T18:08:35.206+01:00  INFO 55467 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-02-17T18:08:35.213+01:00  INFO 55467 --- [           main] com.inditex.zboost.ZboostApplication     : Started ZboostApplication in 1.241 seconds (process running for 1.418)
```

# 🗽 Project

The code of this project is organized with the following package structure:
* **controller**: collects the API implementation introduced for this activity, organizing it in REST controllers for each entity (Order, Product, Ranking, ReportSummary).
* **entity**: Business entities of the application.
* **exception**: Exceptions that may occur in the execution of the business logic.
* **service**: Here you will find the services in charge of applying the necessary logic.
* **repository**: Classes in charge of retrieving data from the DB.
* **utils**: Utility classes.

Additionally, in the resources folder you will find the DML and DDL files used to create the data model. Don't worry, they will be loaded automatically every time you start the application, but feel free to consult them if you wish
 😄.

# 📦 Test preparation

We know you're eager to get started! Even so, we think you may find it helpful to keep the following points in mind:

🔎 Refer to the proposed API for the activity. In the end, the code you will create in the exercises is nothing more than an implementation of the endpoints defined in it. To consult the API details you can load the `openapi.yaml` file located in the `api/` directory of the repository root, you can use any tool that supports OpenAPI visualization (for example  [Swagger Editor](https://editor.swagger.io)).

📖 Read carefully what is asked both in the activity and in each exercise.


💿 Access the database web console whenever you want. The embedded database chosen for the test (H2) exposes on port 8080 a GUI every time the application is raised. You may find it very useful to test queries and see the data they return. The original data is stored in the `data/` directory in the repository root.

To connect to it, do the following:

1.  Start the application following the steps mentioned earlier in this guide.
2.	Access http://localhost:8080/h2-console from your browser.
3.	Make sure you enter the correct data following the properties set in the `src/main/resources/application.properties` file.
4.	Click `Connect`

![img.png](assets%2Fh2_login.png)

5. You are in! Now you can query the data model as well as launch some queries  😉

![img.png](assets%2Fh2_console.png)


# 💪 Exercises

### 📝 Note
Exercises will have inside the code comments with `TODOs` to guide you:

```java
// TODO: Exercise X --------------
```

You can rely on the tools provided by the IDEs selected for testing to show you where they are distributed in a centralized way:

* IntelliJ Idea: https://www.jetbrains.com/help/idea/todo-tool-window.html
* Eclipse: https://stackoverflow.com/questions/16903046/find-todo-tags-in-eclipse

**REMEMBER**: You must not modify the tests, only the application code.

## Exercise 1: Products
In this exercise we will implement the functionalities related to one of the basic entities of the application, which will provide the necessary data to be able to paint the grid of products ordered according to their `score`. You can find the endpoints exposed in the API under the tag `products`.

### 1.a) List product categories
Since we have a product catalog in our database, in this use case what is required is to return a list of the **different** product categories.

### 1.b) List products
In this use case the application is required to return the list of available products. **Optionally**, the consumer of our API may want to filter products by their categories and such filter should be applied in a case-insensitive way (for example: filtering by the categories 'PANTs' or 'drEssES' should not affect the number of results returned).

## Exercise 2: Ordering
We already have our product catalog ready, so now we need to implement the necessary logic to be able to retrieve information regarding the orders that exist for our company's products. The contract that needs to be implemented is found in the API under the `orders` tag.

### 2.a) List orders
Once we have our product catalog available, we want to retrieve information related to the orders placed on them. Therefore, the objective of this use case is to retrieve a list of the last N orders, being mandatory that:

```
1 <= N <= 100
```

Since it is required to be able to retrieve the last orders placed, you must take into account that a **sorting by order date** must be performed.

For this exercise the complete flow of the use case must be created, from the access point in the REST controller to the service that will make the corresponding request to the database.

### 2.b) Retrieve order detail
At any time a user may need to see the details of any of his orders. To do so this use case should return the detail of an order given its ID, which includes the list of the products that are in it along with the subtotals and their total price.

### 2.c) Add cache when retrieving order details
To improve the performance and efficiency of the operation that retrieves the detail of an order, it is required to add a cache that stores the results returned by the method for each new value that is executed and returns the corresponding data in subsequent executions for the same input parameters.

## Exercise 3: Summarized report
So far we have been implementing basic functionality to retrieve product data and their orders, but our users have asked us to be able to see, as a summary, a report with the most important metrics for them:

* Total existing products in the catalog.
* Total orders placed.
* Total accumulated amount of all sales (that is, the sum of the total price of all registered orders).
* Total existing products broken down by category.

## Exercise 4: Ranking
Our users are delighted with the functionality we have been incorporating so far in the app, but they need to have a more complete view of how the company's products are selling. That is why they have asked us to have available a **ranking of best-selling products (based on certain criteria) between two specific dates**.

The criteria you can choose to generate the ranking are:

* **Orders**. If the user chooses this criterion, the ranking should list the most ordered products, from highest to lowest. O**nly how many orders a product appears in should be counted, regardless of the quantity ordered.**
* **Units**. By this criterion the ranking lists the products with the most units sold, from highest to lowest.
* **Total amount sold (amount)**. Finally, this ranking would list the products with the highest amount sold, from highest to lowest.
When the ranking has been generated, each product must be informed both its position within the ranking (rank) and the figure that gives meaning to its position (score) and that is relative to the chosen criterion.
