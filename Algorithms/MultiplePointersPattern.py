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
# print(sumZero([-3, -2, -1, 0, 1, 2, 3]))  # Output: [-3, 3]
# print(sumZero([1, 2, 3, 4, 5]))           # Output: "No numbers that sum up to 0"
# print(sumZero([-2, 0, 1, 3]))             # Output: "No numbers that sum up to 0"
# print(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))  # Output: [-2, 2]



# My Solution
def countUniqueValues(sortedArr):

    # edge case
    if len(sortedArr) == 0:
        return 0
    
    if len(sortedArr) == 1:
        return 1
    
    i = 0
    j = 1

    while j < len(sortedArr):

        # check if i and j are equal then move j up 1
        if sortedArr[i] == sortedArr[j]:
            j += 1
        # if i and j are not the same then mve i up 1
        elif sortedArr[i] != sortedArr[j]:
            # changing the value to store the count of unique values in sortedArr instead of using new variable
            del sortedArr[i+1:j]
            i += 1

    return len(sortedArr)

# print(countUniqueValues([1, 1, 1, 1, 1, 2]))         # Output: 2
# print(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))  # Output: 7
# print(countUniqueValues([]))                         # Output: 0
# print(countUniqueValues([1]))                        # Output: 1
# print(countUniqueValues([-2, -1, -1, 0, 1]))         # Output: 4

# AI Solution
def countUniqueValuesAi(sortedArr):
    if len(sortedArr) == 0:
        return 0

    count = 1
    for i in range(1, len(sortedArr)):
        if sortedArr[i] != sortedArr[i - 1]:
            count += 1
    return count


# Test data for countUniqueValuesAi function
print(countUniqueValuesAi([1, 1, 1, 1, 1, 2]))         # Output: 2
print(countUniqueValuesAi([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))  # Output: 7
print(countUniqueValuesAi([]))                         # Output: 0
print(countUniqueValuesAi([1]))                        # Output: 1
print(countUniqueValuesAi([-2, -1, -1, 0, 1]))         # Output: 4

# Udemy Solution




