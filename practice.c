#include <stdio.h>

void main(void){
    int i,j;
    for(i= 1;i<=11;i++){
        for(j=1;j<=12;j++){
            if((i+j) % 2 == 1){
            printf(" ");
        }else{
            printf("\xDB");
        }
        }
        printf("\n");
    }
}

