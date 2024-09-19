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
var swapPairs = function(head) {
    function swap(head) {
        if(head === null || head.next === null) return;
        let temp = head.val;
        head.val = head.next.val;
        head.next.val = temp;
        
        swap(head.next.next);
    };
    
    swap(head);
    
    return head;
};