//api
//insert添加一个子树，传值Number
//bulkInsert批量添加子树，传值Arrary
//showTree返回二叉树对象
class BinaryTree {
    contructor(tree = []) {
        this.root = null; //根数
        this.Node = key => {
                //生成一个新的子树
                let _obj = Object.create(null, {});
                _obj.key = key;
                _obj.left = null;
                _obj.right = null;
                return _obj;
            }
            //初始化二叉树
    }
}