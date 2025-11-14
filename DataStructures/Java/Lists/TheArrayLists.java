package Lists;

import java.util.ArrayList;
import java.util.List;

public class TheArrayLists {
    
    public static void main (String[] args) {
        List<String> colors = new ArrayList<>();
        // Adding Method
        colors.add("blue");
        colors.add("red");
        colors.add("yellow");
        colors.add("magenta");
        colors.add(1, "green");
        
        // Accessing
        colors.get(1) // green

        // Modifying
        colors.set(3, "teal");

        // Removing
        colors.remove(0);
        colors.remove("green")

        
    }
}



/*
Stack
-----------------------
list  --->  (reference)
                |
                v
Heap
=================================================================================
| ArrayList object                                                                |
|------------------------                                                          |
| size = N                                                                         |
| modCount = ...                                                                   |
| elementData ----------------------┐                                              |
================================================================================= |
                                         |                                         |
                                         v                                         |
                         =================================================================
                         | Internal Object[] array (contiguous memory)              |
                         |----------------------------------------------------------|
Index:                   |   0     |     1     |     2     |   3   |   4   | ...    |
Value (references):      |  refA   |   refB    |   refC    | null  | null  | ...    |
                         =================================================================
                                              |       |       |
                                              v       v       v
                                   ====================================
                                   | Actual objects (scattered in heap) |
                                   |-------------------------------------|
                                   | Object A @ random heap location     |
                                   | Object B @ random heap location     |
                                   | Object C @ random heap location     |
                                   ====================================
 */