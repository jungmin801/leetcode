/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let cur = head;
    while( cur !== null){
        cur = cur.next;
        length++;
    }
    
    if(length === n){
        return head.next;
    }
    
    let target = head;
    let i = 0;
    while (i < length - n - 1) {
        target = target.next;
        i++;
    }
    
    target.next = target.next.next;
    
    return head;
    
};