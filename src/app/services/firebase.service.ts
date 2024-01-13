import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUsuarios } from '../interfaces/i-usuarios';
import { IUsuario } from '../interfaces/i-usuario';
import { IChats } from '../interfaces/ichats';
import { IChat } from '../interfaces/ichat';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  // CAMBIAR INTERFACES
  constructor(private firestore : AngularFirestore) { }
  getCollection(nombreColeccion:string){
    return this.firestore.collection<IUsuarios>(nombreColeccion).valueChanges({idField: 'id'});
  }
  createDocument(nombreColeccion:string, data: IUsuario){
    return this.firestore.collection<IUsuario>(nombreColeccion).add(data);
  }
  deleteDocument(nombreColeccion:string,documentId: string){
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).delete();
  }
  getUsuarioId(nombreColeccion:string,documentId: string){
    return this.firestore.collection<IUsuario>(nombreColeccion).doc(documentId).valueChanges();
  }

  getChats(nombreColeccion:string){
    return this.firestore.collection<IChats>(nombreColeccion).valueChanges({idField: 'id'});
  }
  createChat(nombreColeccion:string, data: IChat){
    return this.firestore.collection<IChat>(nombreColeccion).add(data);
  }
  deleteChat(nombreColeccion:string,documentId: string){
    return this.firestore.collection<IChat>(nombreColeccion).doc(documentId).delete();
  }
  getChatId(nombreColeccion:string,documentId: string){
    return this.firestore.collection<IChat>(nombreColeccion).doc(documentId).valueChanges();
  }

}
