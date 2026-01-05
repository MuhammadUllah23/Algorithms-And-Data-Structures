package codingProblems;

import java.util.HashSet;
import java.util.Set;

public class stringRepeatingCharacters {
    public static void main(String[] args) {
        System.out.println(repeatingCharacters("abcabcbb"));
        System.out.println(repeatingCharacters("bbbbb"));
        System.out.println(repeatingCharacters("pwwkew"));
        System.out.println(repeatingCharacters(""));
        System.out.println(repeatingCharacters("a"));
        System.out.println(repeatingCharacters("aA"));
        System.out.println(repeatingCharacters("a b!c a"));
        System.out.println(repeatingCharacters("abba"));
        System.out.println(repeatingCharacters("dvdf"));
    }

    public static Integer repeatingCharacters(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0, right = 0, best = 0;

        while (right < s.length()) {
            char c = s.charAt(right);

            if (!set.contains(c)) {
                set.add(c);
                best = Math.max(best, right - left + 1);
                right++;
            } else {
                set.remove(s.charAt(left));
                left++;
            }
        }

        return best;
    }

}
