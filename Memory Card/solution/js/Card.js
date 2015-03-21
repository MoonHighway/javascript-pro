(function(scope) {

    var Card = function(val) {
        this.faceUp = false;
        this.faceValue = val;
        this.cardElement = document.createElement('div');
        this.cardElement.onclick = Card.prototype.flip.bind(this);
    };

    Card.prototype.flip = function() {
        if (this.faceUp) {
            this.cardElement.removeAttribute("class");
            this.cardElement.innerHTML = "";
        } else {
            this.cardElement.setAttribute("class","selected");
            this.cardElement.innerHTML = "<span>" + this.faceValue + "</span>";
        }
        this.faceUp = !this.faceUp;
    };

    Card.prototype.discard = function() {
        this.cardElement.parentNode.removeChild(this.cardElement);
    };

    scope.Card = Card;

})(window);


