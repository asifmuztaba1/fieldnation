SELECT user.first_name, user.last_name, MAX(test_result.time_taken) ,avg(test_result.correct) AS correct_ans from user LEFT join test_result on test_result.user_id=user.user_id GROUP BY test_result.user_id;