import java.util.LinkedList;

public class TheLinkedList {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>();

        // Add elements
        list.addFirst(10);   // Insert at head
        list.addLast(20);    // Insert at tail
        list.add(36);
        list.add(72);
        list.add(1, 15);     // Insert at index 1

        System.out.println("List after inserts: " + list);

        // Access elements
        System.out.println("First element: " + list.getFirst());
        System.out.println("Last element: " + list.getLast());
        System.out.println("Element at index 1: " + list.get(1));

        // Remove elements
        list.removeFirst();
        list.removeLast();
        list.remove((Integer)15); // Remove by value
        list.remove(1); // Remove by index

        System.out.println("List after removals: " + list);

        // Iterate
        System.out.print("Traverse list: ");
        for (int val : list) {
            System.out.print(val + " -> ");
        }
        System.out.println("null");
    }
}
