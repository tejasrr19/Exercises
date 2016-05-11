function treesGetSingle(tree_id) {
  // TODO: write function
}

function inspectionsByDate(node){
  //TODO: fucntion to return an array of inspections per day
}

function orchardProjects(){
  //TODO: return all orchard projects
}

function workedTrees(node){
  // TODO: return all worked trees based on node selected
}

function counts(node){
  // TODO : get counts based on various status codes by node
}

.
.
.
.
.
.
.
.

function editTree(tree_id, new_status){
  //function to edit a tree
}

module.exports = {
  trees: {
    getSingle: treesGetSingle,
    getInspectionsByDate: inspectionsByDate,
    getOrchardProjects: orchardProjects,
    getWorkedTrees: workedTrees,
    getCounts: counts
  }
};
