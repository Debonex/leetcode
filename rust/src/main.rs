mod solution;

use solution::Solution;
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    match args.get(1) {
        Some(arg) => {
            if arg == "80" {
                test80();
            } else if arg == "31" {
                test31();
            }
        }
        None => {}
    }
}

fn test31() {
    fn test(list: &mut Vec<i32>, expect: &[i32]) {
        Solution::next_permutation(list);
        assert_eq!(list, expect);
    }

    test(&mut vec![3, 2, 1], &[1, 2, 3]);
    test(&mut vec![1, 2, 3], &[1, 3, 2]);
    test(&mut vec![1, 3, 2], &[2, 1, 3]);
    test(&mut vec![2, 3, 1], &[3, 1, 2]);
    test(&mut vec![1, 1, 5], &[1, 5, 1]);
}

fn test80() {
    fn test(list: &mut Vec<i32>, expect: &[i32]) {
        let res = Solution::remove_duplicates(list);
        assert_eq!(list, expect);
        assert_eq!(res, expect.len() as i32)
    }

    test(&mut vec![0, 0, 1, 1, 1, 1, 2, 3, 3], &[0, 0, 1, 1, 2, 3, 3]);
    test(&mut vec![1, 1, 1, 2, 2, 3], &[1, 1, 2, 2, 3]);
}
