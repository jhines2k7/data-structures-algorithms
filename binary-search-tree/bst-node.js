/**
 * Created by jhines on 1/14/16.
 */
class Node {
    constructor(data, left, right) {
        "use strict";

        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        "use strict";

        return this.data;
    }
}

module.exports = Node;
