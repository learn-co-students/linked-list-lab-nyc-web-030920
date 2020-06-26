
function getName(node){
    return node.name;
}

function headNode(head_key, collection){
    return collection[head_key];
}

function next(node, collection){
    return collection[node.next];
}

function nodeAt(index, head_key, collection){
    let node = collection[head_key];

    for(let i = 0; i < index; i++){
        node = next(node, collection);
    }

    return node;
}

function addressAt(index, head_key, collection){
    let node = collection[head_key];
    let key = head_key;

    for(let i = 0; i < index; i++){
        key = node.next;
        node = collection[key];
    }

    return key;
}

function indexAt(current, collection, head_key){
    let node = collection[head_key];

    let i = 0;
    while(current !== node){
        node = next(node, collection);
        i++;
    }

    return i;
}

function insertNodeAt(index, name, head_key, collection){
    // this is so weird... we assume that the node is in the collection already?
    if(index === 0){
        collection[name].next = head_key;
    }
    else{
        // find the node at index-1
        const prev = nodeAt(index-1, head_key, collection);
        collection[name].next = prev.next;
        prev.next = name;
    }
}

function deleteNodeAt(index, head_key, collection){
    console.log("delete node at", index);
    if(index === 0){
        // do what, exactly?
        collection[head_key].next = null;
    }
    else{
        const prev = nodeAt(index-1, head_key, collection);
        console.log(prev);
        const toDelete = next(prev, collection);
        prev.next = toDelete.next;
        toDelete.next = null;
    }
}