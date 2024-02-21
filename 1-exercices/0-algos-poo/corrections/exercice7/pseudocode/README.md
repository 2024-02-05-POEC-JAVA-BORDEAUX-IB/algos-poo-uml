```
ALGORITHME moyenne de notes
FONCTIONS
  FONCTION avg(notes, total)
    VARIABLES
      sum EST_DE_TYPE NOMBRE
      i EST_DE_TYPE NOMBRE
    DEBUT_FONCTION
      POUR i ALLANT DE 0 A total-1
        sum PREND_LA_VALEUR sum + notes[i]
      FIN_POUR
      RENVOYER sum/total
    FIN_FONCTION
  
  FONCTION getLength(notes)
    VARIABLES
      i EST_DE_TYPE NOMBRE
    DEBUT_FONCTION
        TANT_QUE(notes[i]) FAIRE
          DEBUT_TANT_QUE
            i PREND_LA_VALEUR i + 1
          FIN_TANT_QUE
        RENVOYER i
    FIN_FONCTION

    FONCTION askNote ()
      VARIABLES
        notes EST_DE_TYPE TABLEAU[NOMBRE]
        note EST_DE_TYPE NOMBRE
        i EST_DE_TYPE NOMBRE
      DEBUT_FONCTION
          TANT_QUE(note != -1) FAIRE
            DEBUT_TANT_QUE
              LIRE(note)
            SI (note != -1)
              DEBUT_SI
                notes[i] PREND_LA_VALEUR note
                i PREND_LA_VALEUR i + 1
              FIN_SI
            FIN_TANT_QUE
          RENVOYER notes
      FIN_FONCTION

VARIABLES
  studentNotes EST_DE_TYPE TABLEAU[NOMBRE]
  size EST_DE_TYPE NOMBRE
  average EST_DE_TYPE NOMBRE
DEBUT_ALGORITHME
  ECRIRE ('Saisissez les notes, -1 pour quitter et finir la saisie')
  studentNotes PREND_LA_VALEUR askNotes()
  size PREND_LA_VALEUR getLength(studentNotes)
  average PREND_LA_VALEUR avg(studentNotes, size)
  AFFICHE ('La moyenne est de ' + average)
FIN_ALGORITHME
```