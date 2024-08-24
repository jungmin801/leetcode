/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let cur = head;
    let prev = null;
    while(cur !== null){     
        //val이 같을 때
        if(cur.val === val){
            if(prev === null) {
                head = cur.next;
                cur = head;
            } else {
          prev.next = cur.next;
                cur = cur.next;
                }
        } else {
        // val이 같지 않을 때
        prev = cur;
        cur = cur.next;
        }
    }
    
    return head;
};