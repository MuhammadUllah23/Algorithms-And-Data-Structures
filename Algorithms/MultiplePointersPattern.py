## Multiple Pouniters Pattern

# The time complexity of sumZero is O(n), where n is the length of the input array. 
# This is because each element is checked at most once as the pointers move toward each other.

# The space complexity is O(1), since the function only uses a fixed number of variables regardless of the input size.

def sumZero(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        sum = arr[left] + arr[right]

        if sum == 0:
            return [arr[left], arr[right]]
        elif sum > 0:
            right -= 1
        else:
            left += 1
    
    return "No numbers that sum up to 0"


# Test data for sumZero function
print(sumZero([-3, -2, -1, 0, 1, 2, 3]))  # Output: [-3, 3]
print(sumZero([1, 2, 3, 4, 5]))           # Output: "No numbers that sum up to 0"
print(sumZero([-2, 0, 1, 3]))             # Output: "No numbers that sum up to 0"
print(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))  # Output: [-2, 2]






