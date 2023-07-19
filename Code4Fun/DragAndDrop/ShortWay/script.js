new Sortable(example1, {
    animation: 150,
    ghostClass: 'ghost',
});

new Sortable(example2Left, {
    group: 'example2', // set both lists to same group
    animation: 150
});

new Sortable(example2Right, {
    group: 'example2',
    animation: 150
});