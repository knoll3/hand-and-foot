import Card from "pixi/Card";

class Deck {
    public cards: Card[] = [];

    constructor() {
        this.addCards();
    }

    public sort() {
        //
    }

    public shuffle() {
        //
    }

    private addCards(): void {
        this.cards = [
            new Card("10", "clubs", "10_of_clubs.png"),
            new Card("10", "diamonds", "10_of_diamonds.png"),
            new Card("10", "hearts", "10_of_hearts.png"),
            new Card("10", "spades", "10_of_spades.png"),
            new Card("2", "clubs", "2_of_clubs.png"),
            new Card("2", "diamonds", "2_of_diamonds.png"),
            new Card("2", "hearts", "2_of_hearts.png"),
            new Card("2", "spades", "2_of_spades.png"),
            new Card("3", "clubs", "3_of_clubs.png"),
            new Card("3", "diamonds", "3_of_diamonds.png"),
            new Card("3", "hearts", "3_of_hearts.png"),
            new Card("3", "spades", "3_of_spades.png"),
            new Card("4", "clubs", "4_of_clubs.png"),
            new Card("4", "diamonds", "4_of_diamonds.png"),
            new Card("4", "hearts", "4_of_hearts.png"),
            new Card("4", "spades", "4_of_spades.png"),
            new Card("5", "clubs", "5_of_clubs.png"),
            new Card("5", "diamonds", "5_of_diamonds.png"),
            new Card("5", "hearts", "5_of_hearts.png"),
            new Card("5", "spades", "5_of_spades.png"),
            new Card("6", "clubs", "6_of_clubs.png"),
            new Card("6", "diamonds", "6_of_diamonds.png"),
            new Card("6", "hearts", "6_of_hearts.png"),
            new Card("6", "spades", "6_of_spades.png"),
            new Card("7", "clubs", "7_of_clubs.png"),
            new Card("7", "diamonds", "7_of_diamonds.png"),
            new Card("7", "hearts", "7_of_hearts.png"),
            new Card("7", "spades", "7_of_spades.png"),
            new Card("8", "clubs", "8_of_clubs.png"),
            new Card("8", "diamonds", "8_of_diamonds.png"),
            new Card("8", "hearts", "8_of_hearts.png"),
            new Card("8", "spades", "8_of_spades.png"),
            new Card("9", "clubs", "9_of_clubs.png"),
            new Card("9", "diamonds", "9_of_diamonds.png"),
            new Card("9", "hearts", "9_of_hearts.png"),
            new Card("9", "spades", "9_of_spades.png"),
            new Card("ace", "clubs", "ace_of_clubs.png"),
            new Card("ace", "diamonds", "ace_of_diamonds.png"),
            new Card("ace", "hearts", "ace_of_hearts.png"),
            new Card("ace", "spades", "ace_of_spades.png"),
            new Card("jack", "clubs", "jack_of_clubs.png"),
            new Card("jack", "diamonds", "jack_of_diamonds.png"),
            new Card("jack", "hearts", "jack_of_hearts.png"),
            new Card("jack", "spades", "jack_of_spades.png"),
            new Card("king", "clubs", "king_of_clubs.png"),
            new Card("king", "diamonds", "king_of_diamonds.png"),
            new Card("king", "hearts", "king_of_hearts.png"),
            new Card("king", "spades", "king_of_spades.png"),
            new Card("queen", "clubs", "queen_of_clubs.png"),
            new Card("queen", "diamonds", "queen_of_diamonds.png"),
            new Card("queen", "hearts", "queen_of_hearts.png"),
            new Card("queen", "spades", "queen_of_spades.png"),
            new Card("joker", "black", "black_joker.png"),
            new Card("joker", "red", "red_joker.png"),
        ];
    }
}

export default Deck;
