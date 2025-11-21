package Lists;

import java.util.ArrayList;
import java.util.Collection;
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
        colors.get(1); // green

        // Modifying
        colors.set(3, "teal");

        // Removing
        colors.remove(0);
        colors.remove("green");

        List<Integer> nums = new ArrayList<>(List.of(1, 1, 2, 2, 2, 3, 3, 1));  
        compressList(nums);
        
    }
/* 
    Problem Statement

    You are given an ArrayList<Integer> nums that may contain consecutive duplicate values.

    Your task is to modify the ArrayList in-place so that any sequence of consecutive duplicates is replaced by a single instance of that number.

    Example
    Input:
    [1, 1, 2, 2, 2, 3, 3, 1]

    Output:
    [1, 2, 3, 1]

    Explanation

    Two 1s → keep one

    Three 2s → keep one

    Two 3s → keep one

    Last 1 stays

    Constraints

    1 <= nums.size() <= 10^5

    -10^9 <= nums[i] <= 10^9

    You must modify the ArrayList itself, not create a new one.

    Must run in O(n) time.

    Be careful of:

    ConcurrentModificationException

    Index shifting

    Removing while iterating
*/

    public static void compressList(List<Integer> nums) {
        if (nums.size() <= 1) return;

        int writeIndex = 1; // Where to write the next unique value

        for (int readIndex = 1; readIndex < nums.size(); readIndex++) {
            // If it's not a duplicate of the previous element, keep it
            if (!nums.get(readIndex).equals(nums.get(readIndex - 1))) {
                nums.set(writeIndex, nums.get(readIndex));
                writeIndex++;
            }
        }

        // Remove the extra trailing elements
        while (nums.size() > writeIndex) {
            nums.remove(nums.size() - 1);
        }
        System.out.println(nums);
    }
}
// [1,1,2,2,2,3,3,1]


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