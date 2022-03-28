var RemoveChildren = function () {
    if (this.poolManager) {
        this.poolManager.freeMultiple(this.children);
    }

    this.children.length = 0;
    this.lastAppendedChildren.length = 0;
    this.dirty = true;
    return this;
}

export default RemoveChildren;