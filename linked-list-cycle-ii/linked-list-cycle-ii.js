/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let cur = head;
    const set = new Set();
    let i = 0;
    while(cur !== null){
        if(set.has(cur)){
            return cur;
        }
        set.add(cur);
        cur = cur.next;
    }
    return null;
};