function clearContents(node){
  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA'){
    node.value = '';
    return;
  }

  node.textContent = ''
}