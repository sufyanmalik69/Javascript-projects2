// #include <stdio.h>
// #include <conio.h>

// int main(){
//     int i;
//     printf("Enter something");
//     scanf("%d",&i);
//     switch (i){
//         case 1:
//         printf("You entered 1");
//         break;
//         case 2:
//         printf("You entered 2");
//         break;
//         default:
//         printf("You entered something that is greater than 2");
//         break;
//             }
    
//     return 0;
// }


// factorial
// #include <stdio.h>

// void main(void){
//     int i,f=1,x;
//     printf("Enter a number:");
//     scanf("%d",&i);
//     for(x = 1;x<=i;x++){
//         f *= x;    }
//     }
//     printf("\nfactorial is %d",f);
// }

// write a program to print the greater from two given numbers
#include <stdio.h>

void main(void){
   int i,j;
    printf("Enter the first number:");
    scanf("%d",&i);
    printf("Enter the second number:");
    scanf("%d",&j);
    if(i > j){
    printf("%d is the greatest number",i);}
    if(j > i){
        printf("%d is the greatest number",j);}
     else{
     printf("Invalid Syntax or the given numbers are equal.");
     }
}

// 

// #include <stdio.h>

// int main(){
//     int i;
//     for(i=4;i<=9;i++){
//         printf("%d\t%d\n",i,i*i);
//     }
//     return 0;
// }

// #include <stdio.h>

// int main(){
//     int i,j;
//     for(i=1;i<=5;i++){
//         for(j=1;j<=i;j++){
//             printf("%d",i);
//         }
//         printf("\n");
//     }
//     return 0;
// }

// #include <stdio.h>

// int main(){
//     int i,j;
//     for(i=4;i>=1;i--){
//         for(j=1;j<=i;j++){
//             printf("%d",j);
//         }
//         printf("\n");
//     }
//     return 0;
// }

// #include <stdio.h>

// int main(){
//     int i,j; 

//     for(i=1;i<=7;i--){
//         for(j=1;j<=20;j++){
//         printf(" ");
//         char k = "*";
//         k *= j;
//         printf("%c",k);
//         j++;
//         }
//     }
//     return 0;
// }

// #include <stdio.h>

// void main(void){
//     int f,i,j=1;
//     printf("Enter a number:");
//     scanf("%d",&f);
//     for(i=1;i<=f;i++){
//         j *= i;
//     }
//     printf("Factorial of the given number will be %d",j);
// }

// #include <stdio.h>

// void main(void){
//     int i,j,k;
//     printf("Enter a number:");
//     scanf("%d",&i);
//     for(j=1;j<=10;j++){
//         k = i*j;
//         printf("%d x %d = %d\n",i,j,k);
//     }
// }

// write a program to print 24 36 48 
// #include <stdio.h>

// void main(void){
//     int i,j=12,k;
//     for(i=2;i<=4;i++){
//         k = j*i;
//         printf("%d ",k);
//     }
// }   


// write a program to calculate the area of a sqaure
// #include <stdio.h>

// void main(void){
//     int A,W,H;
//     printf("Enter the width of the square:");
//     scanf("%d",&W);
//     printf("Enter the height of the square:");
//     scanf("%d",&H);
//     A = W*H;
//     printf("The area of the given square will be %d",A);
// }

//


// PRACTICAL NO.1

#include <stdio.h>

void main(void){
   int a = 54;
   char b = 'a';
   char c[] = "my name";
   float d = 39.99;

   printf("Character: %c\n", b);
   printf("String: %s\n", c);
   printf("Integer: %d\n", a);
   printf("Float: %.2f\n", d);

}
