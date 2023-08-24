(()=>{"use strict";function t(l){if(1===l.length)return l;{const e=Math.ceil(l.length/2);let r=t(l.slice(0,e)),n=t(l.slice(e)),i=[];for(;r[0]||n[0];)r[0]<n[0]?(i.push(r[0]),r.shift()):n[0]<r[0]?(i.push(n[0]),n.shift()):r[0]==n[0]?(i.push(r[0]),i.push(n[0]),r.shift(),n.shift()):r[0]?n[0]||(i.push(r[0]),r.shift()):(i.push(n[0]),n.shift());return i}}class l{constructor(t){this.data=t,this.left=null,this.right=null}}function e(l){let e=t(l);return r([...new Set(e)])}function r(t){if(0===t.length)return null;{const e=Math.floor(t.length/2),n=new l(t[e]);return n.left=r(t.slice(0,e)),n.right=r(t.slice(e+1)),n}}const n=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&n(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.data}`),null!==t.left&&n(t.left,`${l}${e?"    ":"│   "}`,!0))},i=[1,7,4,23,8,9,4,3,5,7,9,67,6345,324];console.log(i);let f=new class{constructor(t){this.root=e(t)}insert(t){!function t(e,r){if(r<e.data&&null==e.left){const t=new l(r);e.left=t}else if(r>e.data&&null==e.right){const t=new l(r);e.right=t}else{if(r<e.data)return t(e.left,r);if(r>e.data)return t(e.right,r);if(r==e.data)return void console.log("value already in tree, try another value")}}(this.root,t)}delete(t){!function t(l,e){if(l.left&&l.left.data===e&&null===l.left.left&&null===l.left.right)l.left=null;else if(l.right&&l.right.data===e&&null===l.right.left&&null===l.right.right)l.right=null;else if(l.left&&l.left.data===e&&null!==l.left.left&&null===l.left.left.left&&null===l.left.left.right&&null===l.left.right)l.left=l.left.left;else if(l.left&&l.left.data===e&&null!==l.left.right&&null===l.left.right.left&&null===l.left.right.right&&null===l.left.left)l.left=l.left.right;else if(l.right&&l.right.data===e&&null!==l.right.left&&null===l.right.left.left&&null===l.right.left.right&&null===l.right.right)l.right=l.right.left;else if(l.right&&l.right.data===e&&null!==l.right.right&&null===l.right.right.left&&null===l.right.right.right&&null===l.right.left)l.right=l.right.right;else if(l.data===e&&null!==l.left&&null!==l.right){let t=l.right,e=t;for(;null!==t.left;)e=t,t=t.left;l.data=t.data,e.left=null}else{if(e>l.data&&null===l.right)return void console.log(`${e} not found, please try again`);if(e<l.data&&null===l.left)return void console.log(`${e} not found, please try again`);if(e<l.data)return t(l.left,e);if(e>l.data)return t(l.right,e)}}(this.root,t)}find(t){!function t(l,e){if(l.data===e)return console.log(l),l;if(e>l.data&&null===l.right)console.log(`${e} not found`);else if(e<l.data&&null===l.left)console.log(`${e} not found`);else{if(e>l.data)return t(l.right,e);if(e<l.data)return t(l.left,e)}}(this.root,t)}levelOrderIterative(t){let l=[];if(l.push(this.root),!t){let t=[];for(;0!==l.length;)t.push(l[0].data),l[0].left&&l.push(l[0].left),l[0].right&&l.push(l[0].right),l.shift();return t}for(;0!==l.length;)t(l[0]),l[0].left&&l.push(l[0].left),l[0].right&&l.push(l[0].right),l.shift()}preOrder(t){if(!t){function l(t){let e=[t.data];return null===t.left&&null===t.right?[t.data]:(t.left&&(e=e.concat(l(t.left))),t.right&&(e=e.concat(l(t.right))),e)}return console.log(l(this.root)),l(this.root)}{function e(l){t(l),null===l.left&&null===l.right||(l.left&&e(l.left),l.right&&e(l.right))}e(this.root)}}inOrder(t){if(!t){function l(t){let e=[];return t.left&&(e=e.concat(l(t.left))),e=e.concat([t.data]),t.right&&(e=e.concat(l(t.right))),e}return console.log(l(this.root)),l(this.root)}{function e(l){null===l.left&&null===l.right?t(l):(l.left&&e(l.left),t(l),l.right&&e(l.right))}e(this.root)}}postOrder(t){if(t){function l(e){null===e.left&&null===e.right||(e.left&&l(e.left),e.right&&l(e.right)),t(e)}l(this.root)}else{function e(t){let l=[];return t.left&&(l=l.concat(e(t.left))),t.right&&(l=l.concat(e(t.right))),l=l.concat([t.data]),l}console.log(e(this.root))}}height(t){return function t(l,e=0,r=[]){try{return null==l.left&&null==l.right?r.push(e):(l.left&&t(l.left,e+1,r),l.right&&t(l.right,e+1,r)),Math.max(...r)}catch(t){return"value not found"}}(function t(l,e){return l.data===e?l:e>l.data&&null===l.right||e<l.data&&null===l.left?void 0:e>l.data?t(l.right,e):e<l.data?t(l.left,e):void 0}(this.root,t))}depth(t){return function t(l,e,r=0){if(l.data===e)return r;if(null==l.left&&null==l.right)console.log("value not found");else{if(e<l.data)return t(l.left,e,r+1);if(e>l.data)return t(l.right,e,r+1)}}(this.root,t)}isBalanced(){return function t(l,e=[]){if(null===l.left&&null!==l.right){if(null===l.right.left&&null===l.right.right)return;e.push(!1)}else{if(null===l.left||null!==l.right)return l.left&&t(l.left,e),l.right&&t(l.right,e),!e.includes(!1);if(null===l.left.left&&null===l.left.right)return;e.push(!1)}}(this.root)}rebalance(){if(!this.isBalanced){const t=this.inOrder();this.root=e(t)}}}(i);console.log(f),n(f.root),f.find(6),f.find(1),f.find(5),f.levelOrderIterative(),f.preOrder(),f.postOrder(),f.insert(0),n(f.root),console.log(f.depth(320)),console.log(f.isBalanced()),f.rebalance(),console.log(f.root)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBWU8sRUFBUVIsTUFRcEJRLEVBQVFNLEtBQUssR0FDYk4sRUFBUU0sS0FBSyxHQUNiTixFQUFRTSxLQUFLLEdBSWJOLEVBQVFPLHNCQUNSUCxFQUFRVSxXQU1SVixFQUFRYyxZQW9CUmQsRUFBUUMsT0FBTyxHQUNmUixFQUFZTyxFQUFRUixNQUlwQkssUUFBUUMsSUFDSkUsRUFBUXNCLE1BQU0sTUFRbEJ6QixRQUFRQyxJQUNKRSxFQUFRdUIsY0FHWnZCLEVBQVEyQixZQUVSOUIsUUFBUUMsSUFBSUUsRUFBUVIsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1iYWxhbmNlZC1iaW5hcnktc2VhcmNoLXRyZWUyLy4vc3JjL21lcmdlU29ydC5qcyIsIndlYnBhY2s6Ly90b3AtYmFsYW5jZWQtYmluYXJ5LXNlYXJjaC10cmVlMi8uL3NyYy9CU1QuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZTIvLi9zcmMvcHJldHR5UHJpbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZTIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSkge1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaGFsZiA9IE1hdGguY2VpbChhcnJheS5sZW5ndGgvMilcbiAgICAgICAgLy8gc3BsaXQgYXJyYXkgaW4gaGFsZlxuICAgICAgICBjb25zdCBsZWZ0SGFsZiA9IGFycmF5LnNsaWNlKDAsIGhhbGYpXG4gICAgICAgIC8vIGNhbGwgbWVyZ2VTb3J0IG9uIHRoZSBsZWZ0IGhhbGZcbiAgICAgICAgbGV0IHNvcnRlZExlZnRIYWxmID0gbWVyZ2VTb3J0KGxlZnRIYWxmKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0SGFsZiA9IGFycmF5LnNsaWNlKGhhbGYpXG4gICAgICAgIC8vIGNhbGwgbWVyZ2VTb3J0IG9uIHRoZSByaWdodCBoYWxmXG4gICAgICAgIGxldCBzb3J0ZWRSaWdodEhhbGYgPSBtZXJnZVNvcnQocmlnaHRIYWxmKTtcblxuICAgICAgICAvL2ZvciBlYWNoIGVsZW1lbnQgaW4gbGVmdCBoYWxmIGFuZCByaWdodCBoYWxmLCBzZWUgd2hpY2ggaXMgc21hbGxlclxuICAgICAgICBsZXQgbWVyZ2VkQXJyYXkgPSBbXTtcbiAgICAgICAgd2hpbGUgKHNvcnRlZExlZnRIYWxmWzBdIHx8IHNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgLy8gaWYgKHNvcnRlZExlZnRIYWxmWzFdIDwgc29ydGVkUmlnaHRIYWxmWzBdKSB7IGlzIHRoaXMgd3Jvbmc/XG4gICAgICAgICAgICBpZiAoc29ydGVkTGVmdEhhbGZbMF0gPCBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkUmlnaHRIYWxmWzBdIDwgc29ydGVkTGVmdEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZFJpZ2h0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuXG4gICAgICAgICAgICAgICAgLy8gZWRnZSBjYXNlIHdoZXJlIHRoZSBzYW1lIG51bWJlciBpcyBiZWluZyBjb21wYXJlZFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzb3J0ZWRMZWZ0SGFsZlswXSA9PSBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkUmlnaHRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgICAgICBzb3J0ZWRSaWdodEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgICAgIC8vIGVkZ2UgY2FzZSB3aGVyZSBvbmUgYXJyYXkgaXMgZW1wdHlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZExlZnRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRSaWdodEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkUmlnaHRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNvcnRlZFJpZ2h0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkTGVmdEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkTGVmdEhhbGYuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkQXJyYXk7XG4gICAgfVxufSIsIi8vIGltcG9ydCB7IG5vZGUgfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHsgbWVyZ2VTb3J0IH0gZnJvbSBcIi4vbWVyZ2VTb3J0XCI7XG5cbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vcHJldHR5UHJpbnRcIjtcblxuY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMucm9vdCA9IGJ1aWxkVHJlZShhcnJheSk7XG4gICAgfVxuXG5cbiAgICBpbnNlcnQodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbmV3Tm9kZTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBuZXdOb2RlO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCwgdmFsdWUpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCwgdmFsdWUpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBhbHJlYWR5IGluIHRyZWUsIHRyeSBhbm90aGVyIHZhbHVlXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290LCB2YWx1ZSlcbiAgICB9XG5cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29kZSByZXF1aXJlcyBndWFyZCBjbGF1c2U6IGlmKG5vZGUubGVmdCksIG9yIGlmKG5vZGUucmlnaHQpXG4gICAgICAgICAgICAvLyBjb25zaWRlciBhdCBsZWFzdCA0IGNhc2VzXG4gICAgICAgICAgICAvLyBDYXNlIDE6IGRlbGV0aW5nIHRoZSBsZWFmIG5vZGVcbiAgICAgICAgICAgIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5sZWZ0ID09PSBudWxsICYmIG5vZGUubGVmdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0ICYmIG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc2UgMjogZGVsZXRpbmcgYSBicmFuY2ggbm9kZSB3aXRoIG9uZSBsZWFmOyBwb2ludCB0aGUgcHJlY2VkaW5nIGNoaWxkIHRvIHRoZSAybmQgZm9sbG93aW5nIGNoaWxkXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5sZWZ0ICE9PSBudWxsICYmIG5vZGUubGVmdC5sZWZ0LmxlZnQgPT09IG51bGwgXG4gICAgICAgICAgICAgICAgJiYgbm9kZS5sZWZ0LmxlZnQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG5vZGUubGVmdC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgJiYgbm9kZS5sZWZ0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdC5yaWdodCAhPT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLmxlZnQucmlnaHQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5sZWZ0LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5sZWZ0ID0gbm9kZS5sZWZ0LnJpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0ICYmIG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQubGVmdC5sZWZ0ID09PSBudWxsIFxuICAgICAgICAgICAgICAgICYmIG5vZGUucmlnaHQubGVmdC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmlnaHQgPSBub2RlLnJpZ2h0LmxlZnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUucmlnaHQgJiYgbm9kZS5yaWdodC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLnJpZ2h0LnJpZ2h0ICE9PSBudWxsICYmIG5vZGUucmlnaHQucmlnaHQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLnJpZ2h0LnJpZ2h0LnJpZ2h0ID09PSBudWxsICYmIG5vZGUucmlnaHQubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5yaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogZWRnZSBjYXNlIHdoZXJlIHJvb3QgaXMgaGFzIG9uZSBsZWFmICh0d28gbm9kZXMgb25seSBpbiB0aGUgdHJlZSlcbiAgICAgICAgICAgIC8vIHJlcXVpcmVzIGNoZWNraW5nIGlmIG5vZGUgaXMgcm9vdCwgYW5kIGNoZWNraW5nIGlmIGl0IG9ubHkgaGFzIG9uZSBsZWFmXG5cbiAgICAgICAgICAgIC8vIENhc2UgMzogZGVsZXRpbmcgYSBicmFuY2ggd2l0aCBib3RoIGxlYXZlczsgZ2V0IHRoZSBuZXh0IHJpZ2h0LCB0aGVuIGxlZnRtb3N0IGkgdGhpbmtcbiAgICAgICAgICAgIGVsc2UgaWYgKG5vZGUuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5sZWZ0ICE9PSBudWxsICYmIG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IG5vZGUucmlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBQYXJlbnQgPSB0ZW1wO1xuICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFBhcmVudCA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAgPSB0ZW1wLmxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuZGF0YSA9IHRlbXAuZGF0YTtcbiAgICAgICAgICAgICAgICB0ZW1wUGFyZW50LmxlZnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2FzZSA0OiBjb25zb2xlIGxvZyBpZiB0aGUgdmFsdWUgaXNuJ3QgZm91bmRcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt2YWx1ZX0gbm90IGZvdW5kLCBwbGVhc2UgdHJ5IGFnYWluYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZCwgcGxlYXNlIHRyeSBhZ2FpbmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCwgdmFsdWUpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB2YWx1ZSA+IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0LCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIGZpbmQodmFsdWUpIHtcbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobm9kZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2YWx1ZSBleGlzdHMgYXQgbGVhZiBvciB0aGUgbGVhZiBwYXJlbnRzXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSBjb25zb2xlLmxvZyhgJHt2YWx1ZX0gbm90IGZvdW5kYClcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCA9PT0gbnVsbCkgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZGApXG4gICAgICAgICAgICAvLyBpZiBub2RlIG5vdCBmb3VuZCwgYW5kIG5vdCBhdCB0aGUgbGVhZiBub2RlcywgcmVjdXJzaXZlbHkgZ28gdGhyb3VnaCB0cmVlXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQsIHZhbHVlKVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCwgdmFsdWUpXG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlckl0ZXJhdGl2ZShoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICBsZXQgcXVldWUgPSBbXVxuICAgICAgICBxdWV1ZS5wdXNoKHRoaXMucm9vdClcbiAgICAgICAgaWYgKGhlbHBlckZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaGVscGVyRnVuY3Rpb24ocXVldWVbMF0pXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLmxlZnQpIHF1ZXVlLnB1c2gocXVldWVbMF0ubGVmdClcbiAgICAgICAgICAgICAgICBpZiAocXVldWVbMF0ucmlnaHQpIHF1ZXVlLnB1c2gocXVldWVbMF0ucmlnaHQpXG4gICAgICAgICAgICAgICAgcXVldWUuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gW11cbiAgICAgICAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2gocXVldWVbMF0uZGF0YSk7XG4gICAgICAgICAgICBpZiAocXVldWVbMF0ubGVmdCkgcXVldWUucHVzaChxdWV1ZVswXS5sZWZ0KVxuICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLnJpZ2h0KSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0KVxuICAgICAgICAgICAgcXVldWUuc2hpZnQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlT3JkZXIoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKGhlbHBlckZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaGVscGVyRnVuY3Rpb24obm9kZSlcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdXJzaXZlVmFsdWUgPSBbbm9kZS5kYXRhXTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVybiBbbm9kZS5kYXRhXVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChyZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlVmFsdWUgPSByZWN1cnNpdmVWYWx1ZS5jb25jYXQocmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QpKVxuICAgICAgICAgICAgcmV0dXJuIChyZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QpKVxuXG4gICAgICAgICAgICAvLyBjbGVhbmVyIHZlcnNpb247IGJhc2UgY2FzZSBpcyBub3Qgc3RhdGVkLCBhcyBkbyBub3QgbmVlZCB0byBzdGF0ZSBpZiBudWxsXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiByZWN1cnNpdmVUcmF2ZXJzYWwobm9kZSkge1xuICAgICAgICAgICAgLy8gbGV0IGFycmF5ID0gW25vZGUuZGF0YV0gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGlmIChub2RlLmxlZnQpIGFycmF5ID0gYXJyYXkuY29uY2F0KHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLmxlZnQpKSAvLyBcImNvbm5lY3RpbmdcIiBhcnJheXNcbiAgICAgICAgICAgIC8vIGlmIChub2RlLnJpZ2h0KSBhcnJheSA9IGFycmF5LmNvbmNhdChyZWN1cnNpdmVUcmF2ZXJzYWwobm9kZS5yaWdodCkpIC8vIFwiY29ubmVjdGluZ1wiIGFycmF5c1xuICAgICAgICAgICAgLy8gcmV0dXJuIGFycmF5XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWN1cnNpdmVUcmF2ZXJzYWwodGhpcy5yb290KSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRyYXZlcnNlIHRoZSBsZWZ0IHN1YnRyZWUsIHRoZW4gdGhlIHJvb3QsIHRoZW4gdGhlIHJpZ2h0IHN1YnRyZWUuXG4gICAgaW5PcmRlcihoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICBpZiAoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIGhlbHBlckZ1bmN0aW9uKG5vZGUpXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdClcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyRnVuY3Rpb24obm9kZSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCByZWN1cnNpdmVWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChyZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpKVxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChbbm9kZS5kYXRhXSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QpKVxuICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdClcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyB0cmF2ZXJzZSB0aGUgbGVmdCBzdWJ0cmVlLCB0aGVuIHRoZSByaWdodCBzdWJ0cmVlLCB0aGVuIHRoZSByb290LlxuICAgIHBvc3RPcmRlcihoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICBpZiAoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsICYmIG5vZGUucmlnaHQgPT09IG51bGwpIGhlbHBlckZ1bmN0aW9uKG5vZGUpXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlckZ1bmN0aW9uKG5vZGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCByZWN1cnNpdmVWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChyZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlVmFsdWUgPSByZWN1cnNpdmVWYWx1ZS5jb25jYXQocmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCkpXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KFtub2RlLmRhdGFdKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZpbmQobm9kZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2YWx1ZSBleGlzdHMgYXQgbGVhZiBvciB0aGUgbGVhZiBwYXJlbnRzXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSByZXR1cm5cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgcmV0dXJuIHJlY3Vyc2l2ZUZpbmQobm9kZS5yaWdodCwgdmFsdWUpXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkgcmV0dXJuIHJlY3Vyc2l2ZUZpbmQobm9kZS5sZWZ0LCB2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLCBjb3VudGVyID0gMCwgaGVpZ2h0cyA9IFtdKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09IG51bGwpIGhlaWdodHMucHVzaChjb3VudGVyKVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVUcmF2ZXJzYWwobm9kZS5sZWZ0LCBjb3VudGVyKzEsIGhlaWdodHMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSByZWN1cnNpdmVUcmF2ZXJzYWwobm9kZS5yaWdodCwgY291bnRlcisxLCBoZWlnaHRzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4uaGVpZ2h0cylcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCd2YWx1ZSBub3QgZm91bmQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbChyZWN1cnNpdmVGaW5kKHRoaXMucm9vdCwgdmFsdWUpKVxuICAgIH1cblxuXG4gICAgZGVwdGgodmFsdWUpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBzaW1pbGFyIHRvIGZpbmQsIGJ1dCBhIGNvdW50ZXIgaXMgaW50cm9kdWNlZFxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVUcmF2ZXJzYWwobm9kZSwgdmFsdWUsIGNvdW50ZXI9MCkge1xuICAgICAgICAgICAgaWYgKG5vZGUuZGF0YSA9PT0gdmFsdWUpIHJldHVybiBjb3VudGVyXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgPT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09IG51bGwpIGNvbnNvbGUubG9nKCd2YWx1ZSBub3QgZm91bmQnKVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSByZXR1cm4gcmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUubGVmdCwgdmFsdWUsIGNvdW50ZXIgKyAxKVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLnJpZ2h0LCB2YWx1ZSwgY291bnRlciArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbCh0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIGlzQmFsYW5jZWQoKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlJ3Mgb25seSBub2RlLmxlZnQsIG9yIG9ubHkgbm9kZS5yaWdodCwgdGhlbiBjaGVjayBpZiBpdCBoYXMgbnVsbCBvbiBib3RoLCBlbHNlIHJldHVybiBmYWxzZVxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVJc0JhbGFuY2VkKG5vZGUsIGJvb2xlYW5DaGVja2VyID0gW10pIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGVuZHMgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiAxIGV4dGVuZGVkIGJyYW5jaC4gd2hpY2ggbWVhbnMgaWYgb25lIGJyYW5jaCBpcyAyIG9yIGdyZWF0ZXIgaGVpZ2h0LCBhbmQgdGhlIG90aGVyIGJyYW5jaCBpcyAwIGhlaWdodFxuICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0ID09PSBudWxsKSByZXR1cm5cbiAgICAgICAgICAgICAgICBlbHNlIGJvb2xlYW5DaGVja2VyLnB1c2goZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgIT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQubGVmdCA9PT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQgPT09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgICAgIGVsc2UgYm9vbGVhbkNoZWNrZXIucHVzaChmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZUlzQmFsYW5jZWQobm9kZS5sZWZ0LCBib29sZWFuQ2hlY2tlcilcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlSXNCYWxhbmNlZChub2RlLnJpZ2h0LCBib29sZWFuQ2hlY2tlcilcbiAgICAgICAgICAgICAgICBpZiAoYm9vbGVhbkNoZWNrZXIuaW5jbHVkZXMoZmFsc2UpKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUlzQmFsYW5jZWQodGhpcy5yb290KVxuICAgIH1cblxuICAgIHJlYmFsYW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCYWxhbmNlZCkgcmV0dXJuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3QXJyYXkgPSAodGhpcy5pbk9yZGVyKCkpXG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBidWlsZFRyZWUobmV3QXJyYXkpXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUcmVlKGFycmF5KSB7XG4gICAgICAgIGxldCBzb3J0ZWRBcnJheSA9IG1lcmdlU29ydChhcnJheSlcbiAgICAgICAgbGV0IHJlbW92ZWREdXBsaWNhdGVzID0gWy4uLiBuZXcgU2V0KHNvcnRlZEFycmF5KV1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUJ1aWxkVHJlZShyZW1vdmVkRHVwbGljYXRlcylcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5KSB7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDsgLy8gd2hhdCBkbyBpIG5lZWQgdG8gcmV0dXJuPyBhcnJheT8gbm9kZT9cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBtaWRkbGVJbmRleCA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJheVttaWRkbGVJbmRleF0pXG5cbiAgICAgICAgcm9vdC5sZWZ0ID0gcmVjdXJzaXZlQnVpbGRUcmVlKGFycmF5LnNsaWNlKDAsIG1pZGRsZUluZGV4KSlcbiAgICAgICAgcm9vdC5yaWdodCA9IHJlY3Vyc2l2ZUJ1aWxkVHJlZShhcnJheS5zbGljZShtaWRkbGVJbmRleCArIDEpKVxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gIH1cbn07IiwiaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL0JTVFwiO1xuaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vQlNUXCI7XG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNvbnN0IHRlc3RBcnJheSA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF1cblxuY29uc29sZS5sb2codGVzdEFycmF5KVxuXG4vLyBidWlsZFRyZWUodGVzdEFycmF5KVxubGV0IG5ld1RyZWUgPSBuZXcgVHJlZSh0ZXN0QXJyYXkpXG5jb25zb2xlLmxvZyhuZXdUcmVlKVxucHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxuXG4vLyBuZXdUcmVlLmluc2VydCg5KVxuLy8gcHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxuXG4vLyBuZXdUcmVlLmRlbGV0ZSgzMjMpXG4vLyBwcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG5cbm5ld1RyZWUuZmluZCg2KVxubmV3VHJlZS5maW5kKDEpXG5uZXdUcmVlLmZpbmQoNSlcblxuLy8gbmV3VHJlZS5sZXZlbE9yZGVySXRlcmF0aXZlKChub2RlKSA9PiBjb25zb2xlLmxvZyhub2RlKSlcblxubmV3VHJlZS5sZXZlbE9yZGVySXRlcmF0aXZlKCk7XG5uZXdUcmVlLnByZU9yZGVyKClcblxuLy8gbmV3VHJlZS5wcmVPcmRlcigobm9kZSk9PiBjb25zb2xlLmxvZyhub2RlLmRhdGEpKVxuXG4vLyBuZXdUcmVlLmluT3JkZXIoKG5vZGUpPT5jb25zb2xlLmxvZyhub2RlLmRhdGEpKVxuXG5uZXdUcmVlLnBvc3RPcmRlcigpXG5cbi8vIGNvbnNvbGUubG9nKFxuLy8gICAgIG5ld1RyZWUuaGVpZ2h0KDUwKVxuLy8gKVxuXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgICBuZXdUcmVlLmhlaWdodCg2MzQ1KVxuLy8gKVxuXG5cblxuLy8gY29uc29sZS5sb2coXG4vLyAgICAgbmV3VHJlZS5pc0JhbGFuY2VkKClcbi8vIClcblxuLy8gbmV3VHJlZS5pbnNlcnQoOTk5KVxuLy8gbmV3VHJlZS5pbnNlcnQoMzIyKVxuLy8gbmV3VHJlZS5pbnNlcnQoMzIxKVxuLy8gbmV3VHJlZS5pbnNlcnQoMzIwKVxubmV3VHJlZS5pbnNlcnQoMClcbnByZXR0eVByaW50KG5ld1RyZWUucm9vdClcbi8vIGNvbnNvbGUubG9nKFxuLy8gICAgIG5ld1RyZWUuaGVpZ2h0KDMyNDc3KVxuLy8gKVxuY29uc29sZS5sb2coXG4gICAgbmV3VHJlZS5kZXB0aCgzMjApXG4pXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgICBuZXdUcmVlLmhlaWdodCg1KVxuLy8gKVxuLy8gY29uc29sZS5sb2coXG4vLyAgICAgbmV3VHJlZS5pc0JhbGFuY2VkMigpXG4vLyApXG5jb25zb2xlLmxvZyhcbiAgICBuZXdUcmVlLmlzQmFsYW5jZWQoKVxuKVxuXG5uZXdUcmVlLnJlYmFsYW5jZSgpO1xuXG5jb25zb2xlLmxvZyhuZXdUcmVlLnJvb3QpIl0sIm5hbWVzIjpbIm1lcmdlU29ydCIsImFycmF5IiwibGVuZ3RoIiwiaGFsZiIsIk1hdGgiLCJjZWlsIiwic29ydGVkTGVmdEhhbGYiLCJzbGljZSIsInNvcnRlZFJpZ2h0SGFsZiIsIm1lcmdlZEFycmF5IiwicHVzaCIsInNoaWZ0IiwiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0aGlzIiwiZGF0YSIsImxlZnQiLCJyaWdodCIsImJ1aWxkVHJlZSIsInNvcnRlZEFycmF5IiwicmVjdXJzaXZlQnVpbGRUcmVlIiwiU2V0IiwibWlkZGxlSW5kZXgiLCJmbG9vciIsInJvb3QiLCJwcmV0dHlQcmludCIsIm5vZGUiLCJwcmVmaXgiLCJpc0xlZnQiLCJjb25zb2xlIiwibG9nIiwidGVzdEFycmF5IiwibmV3VHJlZSIsImluc2VydCIsInJlY3Vyc2l2ZUZ1bmN0aW9uIiwibmV3Tm9kZSIsInRlbXAiLCJ0ZW1wUGFyZW50IiwiZmluZCIsImxldmVsT3JkZXJJdGVyYXRpdmUiLCJoZWxwZXJGdW5jdGlvbiIsInF1ZXVlIiwicHJlT3JkZXIiLCJyZWN1cnNpdmVWYWx1ZSIsImNvbmNhdCIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJoZWlnaHQiLCJyZWN1cnNpdmVUcmF2ZXJzYWwiLCJjb3VudGVyIiwiaGVpZ2h0cyIsIm1heCIsImVyciIsInJlY3Vyc2l2ZUZpbmQiLCJkZXB0aCIsImlzQmFsYW5jZWQiLCJyZWN1cnNpdmVJc0JhbGFuY2VkIiwiYm9vbGVhbkNoZWNrZXIiLCJpbmNsdWRlcyIsInJlYmFsYW5jZSIsIm5ld0FycmF5Il0sInNvdXJjZVJvb3QiOiIifQ==