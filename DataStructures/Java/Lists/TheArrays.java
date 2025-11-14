package Lists;
import java.util.Arrays;

// Problem: Maximum Consecutive Ones

// Difficulty: Easy → Medium

// Problem Statement

// Given a binary array nums (an array containing only 0s and 1s), return the maximum number of consecutive 1s in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two 1s are consecutive, then there is a 0, then three 1s are consecutive. Maximum is 3.


// Example 2:

// Input: nums = [0,1,0,1,0]
// Output: 1


// Constraints:

// 1 <= nums.length <= 10^5

// nums[i] is either 0 or 1.

public class TheArrays {
    public static void main (String[] args) {
        String[] colors = new String[5];
        colors[0] = "purple";
        colors[1] = "blue";

        // System.out.println(Arrays.toString(colors));

        int[] numbers = new int[5];
        numbers[0] = 1;
        numbers[1] = 2;
        
        // System.out.println(Arrays.toString(numbers));
        // System.out.println(numbers[6]);

        int[] nums1 = {1, 1, 0, 1, 1, 1};
        int[] nums2 = {0, 1, 0, 1, 0};

        System.out.println(findMaxConsecutiveOnes(nums1)); // Output: 3
        System.out.println(findMaxConsecutiveOnes(nums2));
        
    }

    public static int findMaxConsecutiveOnes(int[] numbers) {
        // initialize maximum variable and temp variable
        int maximum = 0;
        int temp = 0;

        for (int num : numbers) {
            if (num == 1) {
                temp++;
                maximum = Math.max(maximum, temp);
            } else {
                temp = 0;
            }
        }

        return maximum;

    }
}
