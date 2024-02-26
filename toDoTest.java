import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class toDoTest {
    private List<String> tasks;

    public toDoTest() {
        tasks = new ArrayList<>();
    }

    public void addTask(String task) {
        tasks.add(task);
    }

    public void removeTask(String task) {
        tasks.remove(task);
    }

    public void printTasks() {
        for (String task : tasks) {
            System.out.println(task);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println(
                "Hello, this is a basic project I hope to implement.I want to create a to,do list, with user  ");
        toDoTest toDoList = new toDoTest();
        toDoList.addTask("Task 1");
        toDoList.addTask("Task 2");
        toDoList.addTask("Task 3");

        toDoList.printTasks();
    }
}
