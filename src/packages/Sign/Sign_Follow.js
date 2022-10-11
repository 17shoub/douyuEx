async function initPkg_Sign_Follow() {
  const room_id = "3186571";
  await unfollowRoom(room_id);
  await followRoom(room_id);
}

function unfollowRoom(rid) {
  return new Promise((resolve, reject) => {
    fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/rm", {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `ctn=${getCCN()}&rid=${rid}`
    }).then(res => {
        return res.json();
    }).then(ret => {
        resolve(ret);
    }).catch(err => {
        console.log("请求失败!", err);
        reject(err);
    })
  })
}

function followRoom(rid) {
  return new Promise((resolve, reject) => {
    fetch("https://www.douyu.com/wgapi/livenc/liveweb/follow/add", {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `ctn=${getCCN()}&rid=${rid}`
    }).then(res => {
        return res.json();
    }).then(ret => {
        resolve(ret);
    }).catch(err => {
        console.log("请求失败!", err);
        reject(err);
    })
  })
}