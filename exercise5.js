// 26. LODASH EXERCISE5

// NESTED LISTS
// as you can see this list is a flat list, however each element are from different levels and have different parents as parentId. this type of list makes more sense as a nested list to show data relationship.

let flatList = [
  {
    id: 1,
    name: 'lvl 1 item 1',
    parentId: null,
  },
  {
    id: 2,
    name: 'lvl 1 item 2',
    parentId: null,
  },
  {
    id: 3,
    name: 'lvl 2 item 3',
    parentId: 1,
  },
  {
    id: 4,
    name: 'lvl 3 item 4',
    parentId: 3,
  },
  {
    id: 5,
    name: 'lvl 2 item 5',
    parentId: 2,
  },
];

// expect: in the nested version, your able to see the relationships and levels each element belongs. it enables front-end logic implementation.

// [
//   {
//     id: 1,
//     children: [
//       {
//         id: 3,
//         children: [
//           {
//             id: 4,
//             children:[]
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     children: [
//       {
//         id: 5,
//         children:[]
//       },
//     ],
//   },
// ];

// steps - recursion
// 1. get root elements: in this case is id:1 and id:2
// 2. check children for children in recursion until children returns empty array.

let addChildren = function (item) {
  let children = _.filter(flatList, function (childItem) {
    return childItem.parentId === item.id;
  });
  let nestedChildren = [];

  if (!_.isEmpty(children)) {
    // recursion here
    nestedChildren = _.map(children, addChildren);
  }
  // this is bad because it mutated nestedChildren
  // return (item.children = nestedChildren);

  return _.assign({}, item, { children: nestedChildren });
};

let nestedList = _.chain(flatList)
  .filter(function (item) {
    return item.parentId === null;
  })
  .map(addChildren)
  .value();

console.log(nestedList);
