describe("Game Card", function() {

    beforeEach(function() {
        this.card = new Card("Ace");
    });

    afterEach(function() {
        this.card = null;
    });

    describe("Creating Cards", function () {

        it("creates a card", function () {
            expect(this.card).toBeDefined();
        });

        it("has correct face value", function () {
            expect(this.card.faceValue).toBe("Ace");
        });

        it("has a card element", function () {
            expect(this.card.cardElement).toBeTruthy();
        });

        it("card element has an empty class", function () {
            expect(this.card.cardElement.className).toBeFalsy();
        });

        it("card element has empty innerHTML", function () {
            expect(this.card.cardElement.innerHTML).toBeFalsy();
        });

    });

    describe("flipping the card", function () {

        it("starts out face down", function () {
            expect(this.card.faceUp).toBeFalsy();
        });

        it("flips", function () {
            this.card.flip();
            expect(this.card.faceUp).toEqual(true);
        });

        it("flipping adds selected class", function () {
            this.card.flip();
            expect(this.card.cardElement.className).toEqual('selected');
        });

        it("flipping displays card value", function () {
            this.card.flip();
            expect(this.card.cardElement.innerHTML).toBe('<span>Ace</span>');
        });

        it("second flip returns to face down", function () {
            this.card.flip();
            this.card.flip();
            expect(this.card.faceUp).toEqual(false);
        });

        it("second flip removes selected class", function () {
            expect(this.card.cardElement.className).toBeFalsy();
        });

        it("second flip removes card value", function () {
            expect(this.card.cardElement.innerHTML).toBeFalsy();
        });

        it("click causes flip", function() {
            this.card.cardElement.onclick();
            expect(this.card.faceUp).toEqual(true);
        });

    });

    describe("discarding the card", function () {

        it("can be discarded", function() {
            var section = document.createElement('section');
            var size = section.children.length;
            section.appendChild(this.card.cardElement);
            this.card.discard();
            expect(section.children.length).toEqual(size);
        });

    });

});