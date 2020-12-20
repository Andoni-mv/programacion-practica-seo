# Ejercicio final 02

# Genera un script para poder hacer spintax


import spintax
import pandas as pd
from google.colab import files


def spin(string, repeat):
  text_spinned = []

  for i in range(repeat):
    spin = (spintax.spin(string))
    text_spinned.append(spin)

  df = pd.DataFrame({
      "text": text_spinned
  })

  df.to_csv("spinned_texts.csv")
  #files.download("spinned_texts.csv")


text = ''' {You are reading | While reading} through {the comprehensive list |a comprehensive list|detailed list } of the best %title% according to %contributorsCount% users. {Have a look at | Please take a look at } %solutionsCount% %solutionTypes% and choose the best one {for|that fits} your needs. {Take into account |browse|read|discover| find out|check out} what other {users| people| folks} say and
{Upvote|Give a Thumbs up|Like| Boost|Commend|Appreciate} and comment if you agree
{Press|Hit} the blue buttons to get the {solutions|answers}
{Add | Suggest } a {solution | answer} if you have a new one to suggest
'''

#Sample text
spin(text, 10)
