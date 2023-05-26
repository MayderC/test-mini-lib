export class Carrusel {
  constructor(parent, list = [""], start = 0) {
    this.parent = parent;
    this.btnR;
    this.btnL;
    this.localParent;
    this.currentImgContainer;
    this.imglist;
    this.currentImgCont = start > list.length ? 0 : start;
    this.createEelements(list);
    this.setCssClass();
    this.setEevents();
    this.build();
  }

  createEelements(list) {
    this.btnR = document.createElement("div");
    this.btnR.classList.add("btnR");
    this.btnL = document.createElement("div");
    this.btnL.classList.add("btnL");
    this.localParent = document.createElement("div");
    this.currentImgContainer = document.createElement("div");
    this.imglist = this.getNodeImgList(list);
  }

  setCssClass() {
    this.btnL.classList.add("btnL");
    this.btnR.classList.add("btnR");
    this.currentImgContainer.classList.add("container-current-img");
    this.localParent.classList.add("container");
  }

  getNodeImgList(imglist) {
    //array of elemntos <img src='x'/>
    //each element in imglist is a string img = url
    return imglist.map((x) => {
      const img = document.createElement("img");
      img.setAttribute("src", x);
      img.classList.add("img");
      return img;
    });
  }

  setEevents() {
    this.btnR.addEventListener("click", () => {
      this.next();
    });
    this.btnL.addEventListener("click", () => {
      this.prev();
    });
  }

  build() {
    if (!this.parent) return;
    //insert nodes in container = parent
    this.currentImgContainer.appendChild(this.imglist[this.currentImgCont]);
    this.localParent.append(this.btnL, this.currentImgContainer, this.btnR);
    this.parent.appendChild(this.localParent);
    if (this.currentImgCont == 0) this.btnL.classList.add("hide");
  }

  next() {
    if (this.currentImgCont < this.imglist.length - 1) {
      //next img
      this.imglist[this.currentImgCont].remove();
      this.currentImgCont++;
      this.currentImgContainer.appendChild(this.imglist[this.currentImgCont]);
    }
    if (this.currentImgCont == this.imglist.length - 1) {
      //hide in last position
      this.btnR.classList.add("hide");
    }
    if (this.currentImgCont > 0 && this.btnL.classList.contains("hide")) {
      //show left
      this.btnL.classList.remove("hide");
    }
  }

  prev() {
    if (this.currentImgCont > 0) {
      //prev img
      this.imglist[this.currentImgCont].remove();
      this.currentImgCont--;
      this.currentImgContainer.appendChild(this.imglist[this.currentImgCont]);
    }
    if (this.currentImgCont == 0) {
      //hide left in first position
      this.btnL.classList.add("hide");
    }
    if (
      this.currentImgCont < this.imglist.length - 1 &&
      this.btnR.classList.contains("hide")
    ) {
      //show right
      this.btnR.classList.remove("hide");
    }
  }

  destroy() {
    this.localParent.remove();
  }
}
