import {Component, ElementRef, ViewChild} from '@angular/core';
import {Lot} from "./lot";
import {LotCoordinate} from "./lot-coordinate";
import {delay} from "rxjs";

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent {
  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement> = {} as ElementRef;


  @ViewChild('lotContainer', {static: true})
  lotContainer: ElementRef<HTMLDivElement> = {} as ElementRef;

  mapLoaded = false;

  ctx: CanvasRenderingContext2D = {} as CanvasRenderingContext2D;

  public lots: Array<Lot> = [
    // Block 2 - Start
    new Lot(
      [
        new LotCoordinate(185*4, 201*2.5),
        new LotCoordinate(163*4, 201*2.5),
        new LotCoordinate(163*4, 187*2.5),
        new LotCoordinate(185*4, 187*2.5),
      ],
      "Lot 1",
      "Block 2",
      "Available",
      300
    ),
    new Lot(
      [
        new LotCoordinate(163*4, 201*2.5),
        new LotCoordinate(144*4, 201*2.5),
        new LotCoordinate(144*4, 187*2.5),
        new LotCoordinate(163*4, 187*2.5),
      ],
      "Lot 2",
      "Block 2",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(144*4, 201*2.5),
        new LotCoordinate(125*4, 201*2.5),
        new LotCoordinate(125*4, 187*2.5),
        new LotCoordinate(144*4, 187*2.5),
      ],
      "Lot 3",
      "Block 2",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(125*4, 201*2.5),
        new LotCoordinate(106*4, 201*2.5),
        new LotCoordinate(106*4, 187*2.5),
        new LotCoordinate(125*4, 187*2.5),
      ],
      "Lot 4",
      "Block 2",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(106*4, 201*2.5),
        new LotCoordinate(80*4, 201*2.5),
        new LotCoordinate(80*4, 187*2.5),
        new LotCoordinate(106*4, 187*2.5),
      ],
      "Lot 5",
      "Block 2",
      "Available",
      371
    ),
    // Block 2 - End
    // Block 3 - Start
    new Lot(
      [
        new LotCoordinate(185*4, 165*2.5),
        new LotCoordinate(163*4, 165*2.5),
        new LotCoordinate(163*4, 151*2.5),
        new LotCoordinate(185*4, 151*2.5),
      ],
      "Lot 1",
      "Block 3",
      "Available",
      300
    ),
    new Lot(
      [
        new LotCoordinate(163*4, 165*2.5),
        new LotCoordinate(144*4, 165*2.5),
        new LotCoordinate(144*4, 151*2.5),
        new LotCoordinate(163*4, 151*2.5),
      ],
      "Lot 2",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(144*4, 165*2.5),
        new LotCoordinate(125*4, 165*2.5),
        new LotCoordinate(125*4, 151*2.5),
        new LotCoordinate(144*4, 151*2.5),
      ],
      "Lot 3",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(125*4, 165*2.5),
        new LotCoordinate(106*4, 165*2.5),
        new LotCoordinate(106*4, 151*2.5),
        new LotCoordinate(125*4, 151*2.5),
      ],
      "Lot 4",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(106*4, 165*2.5),
        new LotCoordinate(87*4, 165*2.5),
        new LotCoordinate(87*4, 151*2.5),
        new LotCoordinate(106*4, 151*2.5),
      ],
      "Lot 5",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(84*4, 165*2.5),
        new LotCoordinate(65*4, 165*2.5),
        new LotCoordinate(65*4, 151*2.5),
        new LotCoordinate(84*4, 151*2.5),
      ],
      "Lot 6",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(65*4, 165*2.5),
        new LotCoordinate(46*4, 165*2.5),
        new LotCoordinate(46*4, 151*2.5),
        new LotCoordinate(65*4, 151*2.5),
      ],
      "Lot 7",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(46*4, 165*2.5),
        new LotCoordinate(37*4, 165*2.5),
        new LotCoordinate(23*4, 151*2.5),
        new LotCoordinate(46*4, 151*2.5),
      ],
      "Lot 8",
      "Block 3",
      "Available",
      223
    ),
    new Lot(
      [
        new LotCoordinate(185*4, 179*2.5),
        new LotCoordinate(163*4, 179*2.5),
        new LotCoordinate(163*4, 165*2.5),
        new LotCoordinate(185*4, 165*2.5),
      ],
      "Lot 9",
      "Block 3",
      "Available",
      300
    ),
    new Lot(
      [
        new LotCoordinate(163*4, 179*2.5),
        new LotCoordinate(144*4, 179*2.5),
        new LotCoordinate(144*4, 165*2.5),
        new LotCoordinate(163*4, 165*2.5),
      ],
      "Lot 10",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(144*4, 179*2.5),
        new LotCoordinate(125*4, 179*2.5),
        new LotCoordinate(125*4, 165*2.5),
        new LotCoordinate(144*4, 165*2.5),
      ],
      "Lot 11",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(125*4, 179*2.5),
        new LotCoordinate(106*4, 179*2.5),
        new LotCoordinate(106*4, 165*2.5),
        new LotCoordinate(125*4, 165*2.5),
      ],
      "Lot 12",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(106*4, 179*2.5),
        new LotCoordinate(87*4, 179*2.5),
        new LotCoordinate(87*4, 165*2.5),
        new LotCoordinate(106*4, 165*2.5),
      ],
      "Lot 13",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(84*4, 179*2.5),
        new LotCoordinate(65*4, 179*2.5),
        new LotCoordinate(65*4, 165*2.5),
        new LotCoordinate(84*4, 165*2.5),
      ],
      "Lot 14",
      "Block 3",
      "Available",
      266
    ),
    new Lot(
      [
        new LotCoordinate(65*4, 179*2.5),
        new LotCoordinate(49*4, 179*2.5),
        new LotCoordinate(37*4, 165*2.5),
        new LotCoordinate(65*4, 165*2.5),
      ],
      "Lot 15",
      "Block 3",
      "Available",
      292
    ),
    // Block 3 - End
    // Block 4 - Start
    new Lot(
      [
        new LotCoordinate(185*4, 129*2.5),
        new LotCoordinate(170*4, 129*2.5),
        new LotCoordinate(170*4, 115*2.5),
        new LotCoordinate(185*4, 115*2.5),
      ],
      "Lot 1",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(170*4, 129*2.5),
        new LotCoordinate(155*4, 129*2.5),
        new LotCoordinate(155*4, 115*2.5),
        new LotCoordinate(170*4, 115*2.5),
      ],
      "Lot 2",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(155*4, 129*2.5),
        new LotCoordinate(140*4, 129*2.5),
        new LotCoordinate(140*4, 115*2.5),
        new LotCoordinate(155*4, 115*2.5),
      ],
      "Lot 3",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(140*4, 129*2.5),
        new LotCoordinate(125*4, 129*2.5),
        new LotCoordinate(125*4, 115*2.5),
        new LotCoordinate(140*4, 115*2.5),
      ],
      "Lot 4",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(125*4, 129*2.5),
        new LotCoordinate(110*4, 129*2.5),
        new LotCoordinate(110*4, 115*2.5),
        new LotCoordinate(125*4, 115*2.5),
      ],
      "Lot 5",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(110*4, 129*2.5),
        new LotCoordinate(95*4, 129*2.5),
        new LotCoordinate(95*4, 115*2.5),
        new LotCoordinate(110*4, 115*2.5),
      ],
      "Lot 6",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(92*4, 129*2.5),
        new LotCoordinate(77*4, 129*2.5),
        new LotCoordinate(77*4, 115*2.5),
        new LotCoordinate(92*4, 115*2.5),
      ],
      "Lot 7",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(77*4, 129*2.5),
        new LotCoordinate(62*4, 129*2.5),
        new LotCoordinate(62*4, 115*2.5),
        new LotCoordinate(77*4, 115*2.5),
      ],
      "Lot 8",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(62*4, 129*2.5),
        new LotCoordinate(47*4, 129*2.5),
        new LotCoordinate(47*4, 115*2.5),
        new LotCoordinate(62*4, 115*2.5),
      ],
      "Lot 9",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(47*4, 129*2.5),
        new LotCoordinate(32*4, 129*2.5),
        new LotCoordinate(32*4, 115*2.5),
        new LotCoordinate(47*4, 115*2.5),
      ],
      "Lot 10",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(32*4, 129*2.5),
        new LotCoordinate(17*4, 129*2.5),
        new LotCoordinate(17*4, 115*2.5),
        new LotCoordinate(32*4, 115*2.5),
      ],
      "Lot 11",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(185*4, 143*2.5),
        new LotCoordinate(170*4, 143*2.5),
        new LotCoordinate(170*4, 129*2.5),
        new LotCoordinate(185*4, 129*2.5),
      ],
      "Lot 12",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(170*4, 143*2.5),
        new LotCoordinate(155*4, 143*2.5),
        new LotCoordinate(155*4, 129*2.5),
        new LotCoordinate(170*4, 129*2.5),
      ],
      "Lot 13",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(155*4, 143*2.5),
        new LotCoordinate(140*4, 143*2.5),
        new LotCoordinate(140*4, 129*2.5),
        new LotCoordinate(155*4, 129*2.5),
      ],
      "Lot 14",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(140*4, 143*2.5),
        new LotCoordinate(125*4, 143*2.5),
        new LotCoordinate(125*4, 129*2.5),
        new LotCoordinate(140*4, 129*2.5),
      ],
      "Lot 15",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(125*4, 143*2.5),
        new LotCoordinate(110*4, 143*2.5),
        new LotCoordinate(110*4, 129*2.5),
        new LotCoordinate(125*4, 129*2.5),
      ],
      "Lot 16",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(110*4, 143*2.5),
        new LotCoordinate(95*4, 143*2.5),
        new LotCoordinate(95*4, 129*2.5),
        new LotCoordinate(110*4, 129*2.5),
      ],
      "Lot 17",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(92*4, 143*2.5),
        new LotCoordinate(77*4, 143*2.5),
        new LotCoordinate(77*4, 129*2.5),
        new LotCoordinate(92*4, 129*2.5),
      ],
      "Lot 18",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(77*4, 143*2.5),
        new LotCoordinate(62*4, 143*2.5),
        new LotCoordinate(62*4, 129*2.5),
        new LotCoordinate(77*4, 129*2.5),
      ],
      "Lot 19",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(62*4, 143*2.5),
        new LotCoordinate(47*4, 143*2.5),
        new LotCoordinate(47*4, 129*2.5),
        new LotCoordinate(62*4, 129*2.5),
      ],
      "Lot 20",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(47*4, 143*2.5),
        new LotCoordinate(32*4, 143*2.5),
        new LotCoordinate(32*4, 129*2.5),
        new LotCoordinate(47*4, 129*2.5),
      ],
      "Lot 21",
      "Block 4",
      "Available",
      210
    ),
    new Lot(
      [
        new LotCoordinate(32*4, 143*2.5),
        new LotCoordinate(17*4, 143*2.5),
        new LotCoordinate(17*4, 129*2.5),
        new LotCoordinate(32*4, 129*2.5),
      ],
      "Lot 22",
      "Block 4",
      "Available",
      210
    ),
    // Block 4 - End
  ];

  ngOnInit(): void {
    this.mapLoaded = true;
    let lots = this.lots;
    let rect:DOMRect = new DOMRect;

    if (this.mapLoaded) {
      // @ts-ignore
      this.ctx = this.canvas.nativeElement.getContext('2d');
      rect = this.canvas.nativeElement.getBoundingClientRect();
      this.drawMap().then(value => {
        this.lots.forEach(lot => {
          this.ctx.beginPath();
          lot.coordinates.forEach(coordinate => {
            this.ctx.lineTo(coordinate.x, coordinate.y);
          });
          this.ctx.fillStyle = "rgba(0,0,0,1)";
          this.ctx.fill();
          this.ctx.closePath();

          this.ctx.beginPath();
          // color for status
          this.ctx.fillStyle = "rgba(0,255,0,1)";
          lot.coordinates.forEach(coordinate => {
            let x : number = coordinate.x;
            let y : number = coordinate.y;

            if (x < (Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.x)))) {
              x = x + 2;
            } else {
              x = x - 2;
            }

            if (y < (Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.y)))) {
              y = y + 2;
            } else {
              y = y - 2;
            }
            this.ctx.lineTo(x, y);
          });
          this.ctx.fill();
          this.ctx.closePath();

          this.ctx.beginPath();
          this.ctx.strokeStyle="#000";
          this.ctx.strokeText(
            lot.lotNumber,
            ((Math.min.apply(Math, lot.coordinates.map(coordinate => coordinate.x)) + Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.x))) / 2) - 13,
            ((Math.min.apply(Math, lot.coordinates.map(coordinate => coordinate.y)) + Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.y))) / 2) + 5,
          );

          this.ctx.fill();
          this.ctx.closePath();
        });
      });

      this.ctx.canvas.addEventListener('click', function(event) {
        // @ts-ignore
        let x = event.x - rect.left;
        // @ts-ignore
        let y = event.y - rect.top;
        console.log(x + ',' + y);
        lots.forEach(lot => {
          if (x > Math.min.apply(Math, lot.coordinates.map(coordinate => coordinate.x))
            && x < Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.x))
            && y < Math.max.apply(Math, lot.coordinates.map(coordinate => coordinate.y))
            && y > Math.min.apply(Math, lot.coordinates.map(coordinate => coordinate.y))) {
            console.log(lot.lotNumber);
          }
        });



      }, false);

    }
    // @ts-ignore

    // this.ctx.lineTo(38, 216);
    // this.ctx.lineTo(95, 208);
    // this.ctx.lineTo(95, 249);
    // this.ctx.lineTo(38, 249);

    // this.ctx.fillStyle = "rgba(0,0,0,0.5)";
    // this.ctx.closePath();
    // this.ctx.strokeText("Lot 2", ((38 + 95)/2)-13, ((208+249)/2)+5);
    // // this.ctx.textAlign = "center";
    // this.ctx.fill();
  }

  public findLotInfoByCoordinates(x: number, y: number) {
    this.lots.forEach(lot => {

    });
  }

  async drawMap() {
    await new Promise(f => setTimeout(f, 100));
    // @ts-ignore

  }

  animate(): void {
  }
}
