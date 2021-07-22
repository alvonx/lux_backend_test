import json

def odd_number_generator(num):
    odd_num = [d for d in range(1, num*2, 2)]
    final_word = ''
    given_word = 'LuxPMsoft'
    len_given_word = len(given_word)
    for index, w in enumerate(given_word):
        if index < len_given_word-1:
            final_word += w + str(odd_num[num-1-index])
        else:
            final_word += w + ''
    return final_word

print(json.dumps({'final_word': odd_number_generator(20)}))
