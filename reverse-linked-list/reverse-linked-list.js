/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function Node(val){
    this.val = val;
    this.next = null;
};

var reverseList = function(head) {
    // 1. for문을 돌면서 해당 노드를 변수에 담는다.
    // 2. 다음 노드로 넘어간다.
    // 3. 다음 노드는 변수에 담아놓은 노드를 가리킨다.
    // 4. 반복한다.
    // 5. CUR가 null이 되면 반복문을 종료한다.
    
    let cur = head;
    let prev = null;
    
    while(cur !== null) {
        let nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode;
    }
    
    return prev;
};