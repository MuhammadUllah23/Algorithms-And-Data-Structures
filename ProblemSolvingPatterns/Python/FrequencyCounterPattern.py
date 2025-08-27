
def same(arr1, arr2):
    if len(arr1) != len(arr2):
        return False
    
    # Use dictionaries (frequency counters) to count occurrences
    freq1 = {}
    freq2 = {}

    for val in arr1:
        freq1[val] = freq1.get(val, 0) + 1
    
    for val in arr2:
        freq2[val] = freq2.get(val, 0) + 1

    # Check if for each key in freq1, its square is in freq2 with same count
    for key in freq1:
        if freq2.get(key ** 2, 0) != freq1[key]:
            return False
    
    return True

# print(same([1, 2, 3, 2], [9, 1, 4, 4]))  # Output: True
# print(same([1, 2, 3], [1, 4, 9]))        # Output: True
# print(same([1, 2, 3], [1, 2, 3]))        # Output: False


def validAnagram(arr1, arr2): 
    if len(arr1) != len(arr2):
        return False
    
    freq1 = {}
    freq2 = {}

    for val in arr1:
        freq1[val] = freq1.get(val, 0) + 1

    for val in arr2:
        freq2[val] = freq2.get(val, 0) + 1

    for val in arr1:
        if freq1[val] != freq2.get(val, 0):
            return False
    return True

print(validAnagram("listen", "silent"))    # True
print(validAnagram("triangle", "integral"))  # True
print(validAnagram("hello", "bello"))      # False
print(validAnagram("aabbcc", "abcabc"))    # True
print(validAnagram("rat", "car"))          # False
print(validAnagram("", ""))                # True
print(validAnagram("a", "aa"))             # False
print(validAnagram("abcd", "dcba"))        # True
