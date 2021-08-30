var lineProperties = {
    color: 'rgb(255, 44, 90)',
    startPlug:'behind',
    endPlug:'behind',
    dropShadow:true,
    path:'fluid',
    dropShadow: {dx: 2, dy: 1}
}
new LeaderLine(
    document.getElementById('d1'),
    document.getElementById('d2'),
    lineProperties
);
new LeaderLine(
    document.getElementById('internship-1'),
    document.getElementById('internship-2'),
    lineProperties
);
new LeaderLine(
    document.getElementById('internship-2'),
    document.getElementById('internship-3'),
    lineProperties
);
new LeaderLine(
    document.getElementById('professional-work-1'),
    document.getElementById('professional-work-2'),
    lineProperties
);
new LeaderLine(
    document.getElementById('d2'),
    document.getElementById('internship-2'),
    lineProperties
).setOptions({
    endSocket:'left'
});
new LeaderLine(
    document.getElementById('d2'),
    document.getElementById('internship-3'),
    lineProperties
).setOptions({
    endSocket:'left'
});
new LeaderLine(
    document.getElementById('d2'),
    document.getElementById('internship-1'),
    lineProperties
).setOptions({
    endSocket:'left'
});
new LeaderLine(
    document.getElementById('d2'),
    document.getElementById('professional-work-1'),
    {   
        color: 'rgb(255, 44, 90)',
        startPlug:'behind',
        endPlug:'behind',
        startSocket:'bottom',
        endSocket:'top',
        dropShadow:true
    }
).setOptions({
    // path:'grid'
});