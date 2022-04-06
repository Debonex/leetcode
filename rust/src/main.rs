mod solution;

use solution::Solution;
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    match args.get(1) {
        Some(arg) => {
            if arg == "80" {
                test80();
            }
        }
        None => {}
    }
}

fn test80() {
    let mut list1 = vec![0, 0, 1, 1, 1, 1, 2, 3, 3];
    let res1 = Solution::remove_duplicates(&mut list1);
    assert_eq!(list1, [0, 0, 1, 1, 2, 3, 3]);
    assert_eq!(res1, 7);

    let mut list2 = vec![1, 1, 1, 2, 2, 3];
    let res2 = Solution::remove_duplicates(&mut list2);
    assert_eq!(list2, [1, 1, 2, 2, 3]);
    assert_eq!(res2, 5);
}
