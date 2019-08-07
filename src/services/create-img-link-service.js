const ImgLink={
  createLink:(link)=>{
    let arr=link.toLowerCase().split('.');
    arr[arr.length-1]='png';
    return "http://raw.communitydragon.org/latest/game/" + arr.join('.');
  }
};

export default ImgLink;