import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.buttonText = 'Oh Snap';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap(): void {
    //2. Lorsque l'on clique sur le bouton, le texte du bouton doit étre "Oops, un Snap"-->
    //3. Si l'utilisateur a déja cliqué sur le bouton, retirer le snap donc faire -1-->
    //3. Lorsqu'il passe a -1, le bouton réaffiche Oh Snap
    if (this.faceSnap.snaps === 0) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, un Snap';
    }
    else if(this.faceSnap.snaps === 1){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap';
    }
  }
}
