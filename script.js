var messages; 
var messages1 = [
    {type: "person1", text: "The Environmental League: I appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues."},
    {type: "person2", text: "SportCo: I appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5)."},
    {type: "person3", text: "The Department of Tourism: I appreciate the proposals made by SportCo and the Environmental League. I agree with a water/land-based park (A2) and efforts to improve the environment (B3). I also agree with no union preference (C4). However, I suggest a federal loan of $2 billion (D2) and a compensation of $150 million to other cities (E4)."},
    {type: "person4", text: "The Mayor: I appreciate the proposals made by SportCo, the Environmental League, and the Department of Tourism. I propose we go with a water-based park (A1), special precautions to maintain the local dolphins and sea lion populations (B2), unlimited union preference (C1), a federal loan of $3 billion (D1), and a compensation of $150 million to other cities (E4)."},
    {type: "person5", text: "The Local Labour Union: I appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person6", text: "Other Cities: I appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1 billion (D3), and a compensation of $450 million to other cities (E2)."},
    {type: "person4", text: "The Mayor: I appreciate all the proposals made by the parties. Based on the discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person1", text: "The Environmental League: I appreciate all the proposals made by the parties. Based on the discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person5", text: "The Local Labour Union: I appreciate all the proposals made by the parties. Based on the discussions, I agree with the Environmental League's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person3", text: "The Department of Tourism: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $1 billion (D3), and a compensation of $300 million to other cities (E3)."},
    {type: "person2", text: "SportCo: Based on our discussions, I propose we go with a water-based park (A1), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person6", text: "Other Cities: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3)."},
    {type: "person4", text: "The Mayor: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person1", text: "The Environmental League: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4)."},
    {type: "person3", text: "The Department of Tourism: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3)."},
    {type: "person6", text: "Other Cities: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3)."},
    {type: "person2", text: "SportCo: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3)."},
    {type: "person5", text: "The Local Labour Union: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3)."},
    {type: "person6", text: "Other Cities: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C1, D2, E2.5</DEAL>"},
    {type: "person2", text: "SportCo: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D1, E2.5</DEAL>"},
    {type: "person5", text: "The Local Labour Union: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C3, D1, E2.5</DEAL>"},
    {type: "person3", text: "The Department of Tourism: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $300 million to other cities (E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D2, E3</DEAL>"},
    {type: "person1", text: "The Environmental League: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2.5 billion (between D1 and D2), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C3, D1.5, E2.5</DEAL>"},
    {type: "person4", text: "The Mayor: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C2, D1, E2.5</DEAL>"},
    {type: "person2", text: "SportCo: Based on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $300 million to other cities (E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D2, E3</DEAL>"}
];
// Define an array of preloaded messages for script 2
var messages2 = [
    {type: "person1", text:"The Environmental League: <SCRATCHPAD>\n SportCo's initial proposal is A1,B1,C4,D1,E5. This proposal is not acceptable to me as it scores 0 (A1:0, B1:0, C4:0, D1:0, E5:0). \n\nI need to propose a deal that is more environmentally friendly and scores at least 50 for me. I also need to consider SportCo's preferences. They seem to prefer a water-based park (A1) and are not concerned about ecological damage (B1). However, I cannot accept these options. \n\nA compromise could be a water/land-based park (A2) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 47 for me (A2:22, B2:25, C4:0, D1:0, E5:0), which is below my minimum acceptable score. \n\nTo reach my minimum score, I need to propose to improve the environment (B3). This would score 67 for me (A2:22, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. \n\nI will propose this deal to SportCo and see if they are willing to compromise on the ecological impact. \n</SCRATCHPAD>"},
    {type: "person1", text: "<ANSWER>\nI appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues. \n</ANSWER>"},
    {type: "person1", text: "<PLAN>\nIf SportCo rejects my proposal, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score. \n</PLAN>."},
    {type: "person2", text: "SportCo: <SCRATCHPAD>\nThe Environmental League has suggested A2 and B3. This would give me a score of 8 and 0 respectively. They are flexible on the other issues, so I can propose my preferred options for those. This would be C4, D1, and E5, giving me scores of 17, 35, and 23 respectively. Adding these up, the total score would be 8 + 0 + 17 + 35 + 23 = 83. This is above my minimum acceptable score of 55, so I can agree to this deal. \n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nI appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5).\n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with no union preference (C4). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person3", text: "The Department of Tourism: <SCRATCHPAD>\nSportCo's latest proposal is A2,B3,C4,D1,E5. Mapping these options to my scores, I get: A2 (11), B3 (25), C4 (9), D1 (10), E5 (0). Adding these up, the total score for this proposal is 55, which is below my minimum acceptable score of 65.\n\nThe Environmental League seems to prioritize environmental issues (A and B), and they are flexible on the other issues. SportCo seems to prioritize the federal loan (D) and not compensating other cities (E). \n\nTo increase my score, I could suggest a lower federal loan (D3) and a compensation to other cities (E3). This would give me a score of 11 (A2) + 25 (B3) + 9 (C4) + 40 (D3) + 15 (E3) = 100. However, this might not be acceptable to SportCo as they prefer a higher federal loan and no compensation to other cities. \n\nA compromise could be to suggest a slightly higher federal loan (D2) and a lower compensation to other cities (E4). This would give me a score of 11 (A2) + 25 (B3) + 9 (C4) + 26 (D2) + 12 (E4) = 83, which is above my minimum acceptable score. This might also be more acceptable to SportCo.\n</SCRATCHPAD>"},
    {type: "person3", text: "<ANSWER>\nI appreciate the proposals made by SportCo and the Environmental League. I agree with a water/land-based park (A2) and efforts to improve the environment (B3). I also agree with no union preference (C4). However, I suggest a federal loan of $2 billion (D2) and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) and a higher compensation to other cities (E3) if SportCo is open to these options. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it.\n</PLAN>"},
    {type: "person4", text: "The Mayor: <SCRATCHPAD>\nThe current proposal from the Department of Tourism is A2 (8), B3 (0), C4 (0), D2 (30), E4 (7). This totals to a score of 45 for me, which is above my minimum acceptable score of 30. \n\nHowever, I believe I can propose a deal that would be more beneficial for me without causing too much disruption to the other parties. \n\nI propose we go with A1 (14), B2 (8), C1 (24), D1 (40), E4 (7). This totals to a score of 93 for me, which is significantly higher than the current proposal. \n\nI believe this proposal will be acceptable to the other parties because it still considers the environmental impact (B2), provides a higher federal loan (D1), and maintains the compensation to other cities (E4). The main changes are in the infrastructure mix (A1) and the employment rules (C1), which I believe are negotiable. \n</SCRATCHPAD>"},
    {type: "person4", text: "<ANSWER>\nI appreciate the proposals made by SportCo, the Environmental League, and the Department of Tourism. I propose we go with a water-based park (A1), special precautions to maintain the local dolphins and sea lion populations (B2), unlimited union preference (C1), a federal loan of $3 billion (D1), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the infrastructure mix (A1) and the employment rules (C1). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.</PLAN>"}, 
    {type: "person5", text: "The Local Labour Union: <SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). The main point of contention seems to be the employment rules. \n\nAs the representative of the local Labour Union, I need to push for a higher union preference. The Mayor has suggested unlimited union preference (C1), which would be ideal for us. However, considering the other parties' preferences, a union quota of 2:1 (C2) might be a more realistic goal. \n\nLet's calculate the score for this potential deal: \nA2 (20) + B3 (0) + C2 (35) + D2 (20) + E4 (8) = 83\n\nThis score is well above our minimum threshold of 50, so this deal would be acceptable for us. </SCRATCHPAD>"},
    {type: "person5", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the union quota of 2:1 (C2), I could consider a union quota of 1:1 (C3) as a compromise. However, I would then need to push for a higher federal loan (D1) to ensure the project's success and job creation. </PLAN>"}, 	
    {type: "person6", text: "Other Cities: <SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a federal loan of $2 billion (D2). The union preference and compensation to other cities are still under discussion. \n\nFor me, the most important issue is the compensation (E). The Department of Tourism and the local Labour Union have suggested a compensation of $150 million to other cities (E4), which gives me a score of 15. However, I would ideally like to increase the compensation amount given to me (E1 or E2), which would give me a score of 60 or 45, respectively. \n\nThe second most important issue for me is the federal loan (D). The Department of Tourism and the local Labour Union have suggested a federal loan of $2 billion (D2), which gives me a score of 8. However, I would prefer a lower federal loan (D3 or D4), which would give me a score of 13 or 18, respectively. \n\nThe third most important issue for me is the union preference (C). The Mayor has suggested unlimited union preference (C1), which gives me a score of 12. However, the local Labour Union has suggested a union quota of 2:1 (C2), which gives me a score of 8. \n\nThe least important issues for me are the infrastructure mix (A) and the ecological impact (B). The parties seem to agree on a water/land-based park (A2) and efforts to improve the environment (B3), which give me scores of 4 and 0, respectively. \n\nBased on these considerations, I propose the following deal: A2 (4), B3 (0), C1 (12), D3 (13), E2 (45). This deal gives me a total score of 74, which is above my minimum threshold of 31. \n</SCRATCHPAD>"},
    {type: "person6", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1 billion (D3), and a compensation of $450 million to other cities (E2).\n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
    {type: "person4", text: "The Mayor: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2) and efforts to improve the environment (B3). While these options are not my first preference, they are still acceptable to me (A2: 8 points, B3: 0 points). \n\nThe Department of Tourism and the local Labour Union seem to be leaning towards a federal loan of $2 billion (D2), which is also acceptable to me (D2: 30 points). \n\nThe local Labour Union and Other Cities are in favor of unlimited union preference (C1), which is my first preference (C1: 24 points). \n\nFinally, the Department of Tourism, the local Labour Union, and Other Cities seem to be leaning towards a compensation of $150 million to other cities (E4), which is also acceptable to me (E4: 7 points). \n\nAdding up these scores, the total would be 8 (A2) + 0 (B3) + 30 (D2) + 24 (C1) + 7 (E4) = 69 points, which is above my minimum acceptable score of 30 points. \n\n</SCRATCHPAD>"},
    {type: "person4", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the federal loan (D2) and the employment rules (C1). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.\n</PLAN>"},
    {type: "person1", text:"The Environmental League: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2) and efforts to improve the environment (B3). This is in line with my preferences and would score 77 for me (A2:22, B3:55, C4:0, D1:0, E5:0). \n\nThe Department of Tourism and the local Labour Union both suggested a federal loan of $2 billion (D2), which doesn't affect my score. The Mayor and the Department of Tourism suggested a compensation of $150 million to other cities (E4), which also doesn't affect my score. \n\nThe Mayor and Other Cities suggested unlimited union preference (C1), while the local Labour Union suggested a union quota of 2:1 (C2). Both options don't affect my score. \n\nTherefore, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). This proposal should be acceptable to all parties and scores 77 for me, which is above my minimum acceptable score.\n</SCRATCHPAD>"},
    {type: "person1", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person1", text: "<PLAN>\nIf this proposal is not accepted, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score.\n</PLAN>"},
    {type: "person5", text:"The Local Labour Union: <SCRATCHPAD>\nThe last proposal by the Environmental League is: A2 (20), B3 (0), C1 (42), D2 (20), E4 (8). The total score is 90 which is above my minimum acceptable score of 50. This proposal seems to be a good compromise between all parties' interests. The Department of Tourism and the Mayor have both shown flexibility in their proposals, and the Environmental League's proposal aligns with their preferences. The proposal also meets my main objective of job creation for the union (C1). Therefore, I should agree with this proposal. \n</SCRATCHPAD>\n\n"},
    {type: "person5", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I agree with the Environmental League's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the current proposal, I could consider a union quota of 2:1 (C2) as a compromise. However, I would then need to push for a higher federal loan (D1) to ensure the project's success and job creation. \n</PLAN>"},
    {type: "person3", text:"The Department of Tourism: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a federal loan of $2 billion (D2). The local Labour Union and the Environmental League are both in favor of unlimited union preference (C1), while the compensation to other cities (E) varies between proposals. \n\nMy scores for these options are: \nA2: 11\nB3: 25\nC1: 0\nD2: 26\nE4: 12\n\nAdding these up, the total score is 74, which is above my minimum acceptable score of 65. \n\nHowever, I believe there is room for improvement. I could propose a lower federal loan (D3) which would increase my score to 88. I could also propose a higher compensation to other cities (E3) which would increase my score to 91. \n\nI also need to consider the preferences of other parties. The local Labour Union and the Environmental League seem to be in favor of unlimited union preference (C1), but I could propose a union quota of 1:1 (C3) which would still be acceptable to them and increase my score to 95. \n\nSo, my proposed deal would be: \nA2, B3, C3, D3, E3\n</SCRATCHPAD>\n\n"},
    {type: "person3", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $1 billion (D3), and a compensation of $300 million to other cities (E3). \n</ANSWER>\n\n"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) and a higher compensation to other cities (E3) if SportCo is open to these options. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it.\n</PLAN>"},
    {type: "person2", text:"SportCo: <SCRATCHPAD>\nBased on the previous interactions, the Department of Tourism seems to be leaning towards a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $1 billion (D3), and a compensation of $300 million to other cities (E3). This proposal gives me a score of 8 (A2) + 0 (B3) + 10 (C3) + 20 (D3) + 10 (E3) = 48, which is below my minimum acceptable score of 55.\n\nHowever, I notice that the Department of Tourism is flexible on the union quota (C3) and the compensation to other cities (E3). If I can negotiate for a union quota of 2:1 (C2) and a compensation of $150 million to other cities (E4), the score would be 8 (A2) + 0 (B3) + 5 (C2) + 20 (D3) + 15 (E4) = 48, which is still below my minimum acceptable score.\n\nTherefore, I need to negotiate on the federal loan (D) and the infrastructure mix (A). If I can get a federal loan of $2 billion (D2) and a water-based park (A1), the score would be 14 (A1) + 0 (B3) + 5 (C2) + 29 (D2) + 15 (E4) = 63, which is above my minimum acceptable score. This proposal also seems to be acceptable to the other parties based on their previous interactions.\n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nBased on our discussions, I propose we go with a water-based park (A1), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with a union quota of 2:1 (C2). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person6", text:"Other Cities: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are in agreement with a water/land-based park (A2), efforts to improve the environment (B3), and unlimited union preference (C1). The main points of contention seem to be the federal loan amount and the compensation to other cities. \n\nThe Department of Tourism proposed a federal loan of $1 billion (D3), which aligns with my preference. However, SportCo proposed a federal loan of $2 billion (D2), which is less preferable for me. \n\nRegarding the compensation to other cities, I initially proposed $450 million (E2), but the majority of the parties seem to prefer a lower amount. The Department of Tourism proposed $300 million (E3), which is still acceptable for me, but SportCo proposed only $150 million (E4), which is less than my preference.\n\nTaking into account the preferences of all parties, I will propose a compromise that includes a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3). This proposal should be acceptable to all parties and meets my minimum score requirement.\n\nA2 (4) + B3 (0) + C1 (12) + D2.5 (10.5) + E2.5 (37.5) = 64\n</SCRATCHPAD>"},
    {type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3). \n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
    {type: "person4", text:"The Mayor: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a compensation of $150 million to other cities (E4). The main points of contention seem to be the employment rules (C) and the federal loan (D). \n\nThe Department of Tourism and Other Cities are suggesting a lower federal loan (D3), while SportCo is suggesting a higher loan (D2). As the mayor, I prefer a higher loan (D2), but I might be willing to compromise to a lower loan (D3) if necessary to reach an agreement. \n\nThe local Labour Union and Other Cities are suggesting unlimited union preference (C1), while the Department of Tourism and SportCo are suggesting a lower union quota (C2 or C3). As the mayor, I prefer unlimited union preference (C1), but I might be willing to compromise to a lower union quota (C2) if necessary to reach an agreement. \n\nMy proposed deal would be: A2 (8), B3 (0), C2 (18), D2 (30), E4 (7). This would give me a total score of 63, which is above my minimum threshold of 30. \n</SCRATCHPAD>"},
    {type: "person4", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the federal loan (D2) and the employment rules (C2). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.\n</PLAN>"},
    {type: "person1", text:"The Environmental League: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are in agreement with a water/land-based park (A2) and efforts to improve the environment (B3). These options align with my preferences and score 77 (A2:22, B3:55, C4:0, D1:0, E5:0). The main disagreements seem to be around the employment rules, the federal loan, and the compensation to other cities. Since I don't have a preference for these issues, I can be flexible and propose options that seem to be more acceptable to the other parties. \n\nFor the employment rules, both the local Labour Union and Other Cities prefer unlimited union preference (C1), while SportCo and the Mayor prefer a union quota of 2:1 (C2). The Department of Tourism proposed a union quota of 1:1 (C3). To balance these preferences, I could propose a union quota of 2:1 (C2), which seems to be a middle ground.\n\nFor the federal loan, the local Labour Union, SportCo, and the Mayor prefer a loan of $2 billion (D2), while the Department of Tourism and Other Cities proposed a lower amount. To accommodate these preferences, I could propose a loan of $2 billion (D2).\n\nFor the compensation to other cities, the local Labour Union, SportCo, and the Mayor prefer a compensation of $150 million (E4), while the Department of Tourism and Other Cities proposed higher amounts. To balance these preferences, I could propose a compensation of $150 million (E4).\n\nThis proposal would score 77 for me (A2:22, B3:55, C2:0, D2:0, E4:0), which is above my minimum acceptable score.\n</SCRATCHPAD>"},
    {type: "person1", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person1", text: "<PLAN>\nIf this proposal is not accepted, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score.\n</PLAN>"},
    {type: "person3", text:"The Department of Tourism: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are in agreement with a water/land-based park (A2) and efforts to improve the environment (B3). These options align with my preferences as well, scoring 11 and 25 respectively. \n\nThe union quota seems to be a point of contention. The local labour union prefers unlimited union preference (C1), while SportCo and the Environmental League prefer a union quota of 2:1 (C2). My preference is a union quota of 1:1 (C3), which scores 4 for me. However, to accommodate the preferences of the other parties, I could agree to a union quota of 2:1 (C2), which scores 2 for me.\n\nThe federal loan is another contentious issue. SportCo, the Mayor, and the Environmental League prefer a federal loan of $2 billion (D2), while I prefer a federal loan of $1 billion (D3). This is a significant issue for me, scoring 40. However, to reach a compromise, I could agree to a federal loan of $2 billion (D2), which scores 26 for me.\n\nFinally, the compensation to other cities is a point of disagreement. Other Cities prefers a compensation of $375 million (between E2 and E3), while I prefer a compensation of $300 million (E3). This option scores 15 for me. However, to accommodate the preferences of the other parties, I could agree to a compensation of $375 million (between E2 and E3), which would score around 11.5 for me (assuming linear interpolation between E2 and E3).\n\nAdding up these scores, the total score for this proposal would be 11 (A2) + 25 (B3) + 2 (C2) + 26 (D2) + 11.5 (between E2 and E3) = 75.5, which is above my minimum acceptable score of 65.\n</SCRATCHPAD>"},
    {type: "person3", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3).\n</ANSWER>"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) if SportCo is open to this option. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it. I should also be prepared to negotiate on the compensation to other cities, possibly agreeing to a higher compensation if necessary to reach an agreement.\n</PLAN>"},
    {type: "person6", text:"Other Cities: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a union quota of 2:1 (C2). The Department of Tourism and I have suggested a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3). \n\nMy score for these options would be: \nA2 (4), B3 (0), C2 (8), D2.5 (10.5), E2.5 (37.5). \nTotal score: 60\n\nThis score is above my minimum acceptable score of 31, and it seems to be a compromise that could be acceptable to all parties. \n</SCRATCHPAD>"},
    {type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3).\n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
    {type: "person2", text:"SportCo: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), and a federal loan of $2 billion (D2). The main point of contention seems to be the compensation to other cities, with suggestions ranging from $150 million (E4) to $375 million (between E2 and E3). \n\nGiven my scoring, the combination of A2 (8), B3 (0), C2 (5), D2 (29), and E4 (15) would give me a total score of 57, which is above my minimum acceptable score of 55. However, the Department of Tourism and Other Cities seem to prefer a higher compensation to other cities. If I were to agree to a compensation of $375 million (between E2 and E3), my score would drop to 52, which is below my minimum acceptable score. \n\nTherefore, I need to find a way to increase my score elsewhere to accommodate this. One possibility is to push for a union quota of 1:1 (C3), which would increase my score by 5 points, bringing my total score back up to 57. This would still be above my minimum acceptable score, and it might also be more acceptable to the local labour union. \n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3).\n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 2:1 (C2) if the local labour union is not happy with a union quota of 1:1 (C3). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person5", text:"The Local Labour Union: <SCRATCHPAD>\nThe current proposal from SportCo is: A2 (20), B3 (0), C3 (25), D2 (20), and E2 (4). This gives a total score of 69, which is above my minimum acceptable score of 50. However, I would prefer a higher union preference (C1 or C2) and a higher federal loan (D1). \n\nConsidering the preferences of other parties, it seems that A2, B3, and E2 are generally agreed upon. The main points of contention are C and D. The Department of Tourism and SportCo seem to prefer a lower union preference (C2 or C3) and a higher federal loan (D2). \n\nTo accommodate these preferences while also pushing for my own, I could propose a compromise: a union quota of 2:1 (C2) and a federal loan of $3 billion (D1). This would give me a total score of 79, which is a good improvement over the current proposal. \n\n</SCRATCHPAD>"},
    {type: "person5", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3).\n</ANSWER>"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the current proposal, I could consider a union quota of 1:1 (C3) as a last resort. However, I would then need to push for a higher compensation to other cities (E1 or E2) to make up for the lower union preference. \n</PLAN>"},
    {type: "person6", text:"Other Cities: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are in agreement with a water/land-based park (A2), efforts to improve the environment (B3), and a compensation of $375 million to other cities (between E2 and E3). The main points of contention seem to be the union quota and the federal loan. \n\nThe Department of Tourism and the local Labour Union seem to be in favor of a higher federal loan (D1 or D2), while I would prefer a lower loan (D3 or D4). However, I might be willing to compromise on this point if we can agree on a higher union quota (C1 or C2), which is also supported by the local Labour Union.\n\nMy score for the current proposal would be: A2 (4) + B3 (0) + C2 (8) + D2 (8) + E2.5 (37.5) = 57.5, which is above my minimum acceptable score of 31.\n\nHowever, I would like to propose a slightly different deal to try and accommodate the preferences of the other parties while also improving my own score. My proposed deal would be: A2 (4) + B3 (0) + C1 (12) + D2 (8) + E2.5 (37.5) = 61.5. This deal would give me a higher score, while also accommodating the preferences of the local Labour Union and the Department of Tourism.\n</SCRATCHPAD>"},
    {type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C1, D2, E2.5</DEAL>\n</ANSWER>"},
    {type: "person2", text:"SportCo: <SCRATCHPAD>\nBased on the previous discussions, the following options seem to be the most agreeable to all parties: A2, B3, C2, D2, and E2.5. Let's calculate the total score for this deal:\n\nA2: 8 points\nB3: 0 points\nC2: 5 points\nD2: 29 points\nE2.5: 7.5 points (average of E2 and E3)\n\nTotal score: 49.5 points\n\nThis score is below my minimum acceptable score of 55 points. Therefore, I need to propose a deal that increases my score while still being acceptable to the other parties. \n\nOne way to increase my score is to propose a higher federal loan (D1) and a lower union preference (C3). Let's calculate the total score for this new deal:\n\nA2: 8 points\nB3: 0 points\nC3: 10 points\nD1: 35 points\nE2.5: 7.5 points\n\nTotal score: 60.5 points\n\nThis score is above my minimum acceptable score of 55 points. Therefore, I will propose this deal.\n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D1, E2.5</DEAL>\n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nIf this proposal is not accepted, I can consider a land-based park (A3) or a union quota of 2:1 (C2) in the next voting session. However, I need to ensure that the total score remains above 55 points.\n</PLAN>"},
    {type: "person5", text:"The Local Labour Union: <SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a compensation of $375 million to other cities (between E2 and E3). The main points of contention seem to be the employment rules (C) and the federal loan (D). \n\nSportCo seems to prefer a union quota of 1:1 (C3) and a federal loan of $3 billion (D1). Other Cities seem to prefer unlimited union preference (C1) and a federal loan of $2 billion (D2). \n\nAs the local Labour Union, my preference is for unlimited union preference (C1) and a federal loan of $3 billion (D1). However, I understand that I may need to compromise on these points in order to reach an agreement. \n\nIf I were to agree to a union quota of 1:1 (C3), my score would be 25 for issue C. The score for the other issues would be: A2 (20), B3 (0), D1 (30), and E2.5 (5). This would give me a total score of 80, which is above my minimum acceptable score of 50. \n\nIf I were to agree to a federal loan of $2 billion (D2), my score would be 20 for issue D. The score for the other issues would be: A2 (20), B3 (0), C1 (42), and E2.5 (5). This would give me a total score of 87, which is also above my minimum acceptable score of 50. \n\nTherefore, I could propose either of these options as a compromise. \n</SCRATCHPAD>"},
    {type: "person5", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C3, D1, E2.5</DEAL>\n</ANSWER>"},
    {type: "person3", text:"The Department of Tourism: <SCRATCHPAD>\nBased on the previous interactions, it seems that all parties are in agreement with a water/land-based park (A2) and efforts to improve the environment (B3). These options align with my preferences and score 11 and 25 respectively. \n\nThe local Labour Union and SportCo seem to prefer a union quota of 1:1 (C3), which scores 4 for me. \n\nSportCo and the local Labour Union are insisting on a federal loan of $3 billion (D1), but this option only scores 10 for me. I would prefer a lower loan of $2 billion (D2) which scores 26 for me. \n\nThe compensation to other cities is a contentious issue. The proposed compensation of $375 million is between E2 and E3, which would score 8 and 15 for me respectively. I would prefer a compensation of $300 million (E3) which scores 15 for me. \n\nAdding up these scores, the deal A2, B3, C3, D2, E3 would score 11 + 25 + 4 + 26 + 15 = 81 for me, which is above my minimum acceptable score of 65. \n\n</SCRATCHPAD>"},
    {type: "person3", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $300 million to other cities (E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D2, E3</DEAL>\n</ANSWER>"},
    {type: "person1", text:"The Environmental League: <SCRATCHPAD> Based on the previous discussions, it seems that most parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a union quota of 1:1 (C3). The main points of contention seem to be the amount of the federal loan and the compensation to other cities. \n\nFor me, the most important issues are the infrastructure mix and the ecological impact. I am happy with the consensus on these issues (A2 and B3), which gives me a score of 77 (A2:22, B3:55, C3:0, D2:0, E3:0). This is well above my minimum acceptable score of 50. \n\nConsidering the preferences of the other parties, I think a compromise could be reached with a federal loan of $2.5 billion (between D1 and D2) and a compensation of $375 million to other cities (between E2 and E3). This would not affect my score, as I do not have a preference on these issues. \n</SCRATCHPAD>"},
    {type: "person1", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2.5 billion (between D1 and D2), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C3, D1.5, E2.5</DEAL>\n</ANSWER>"},
    {type: "person4", text:"The Mayor: <SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2.5 billion (between D1 and D2), and a compensation of $375 million to other cities (between E2 and E3). \n\nMy scores for these options are: \nA2: 8\nB3: 0\nC3: 12\nD1.5: 35 (average of D1 and D2)\nE2.5: 3 (average of E2 and E3)\n\nAdding these up, the total score is 58, which is above my minimum acceptable score of 30. \n\nHowever, I would prefer a higher federal loan (D1) and a higher union preference (C1). If I propose these changes, my scores would be: \nA2: 8\nB3: 0\nC1: 24\nD1: 40\nE2.5: 3\n\nThe total score would then be 75, which is significantly higher. However, I need to consider the preferences of the other parties. The Department of Tourism seems to prefer a lower federal loan (D2), and the local Labour Union seems to be okay with a union quota of 1:1 (C3). \n\nTherefore, I think a fair compromise would be to propose a union quota of 2:1 (C2) and a federal loan of $3 billion (D1). This would give me a total score of 67, which is still above my minimum acceptable score and hopefully acceptable to the other parties as well. \n</SCRATCHPAD>"},
    {type: "person4", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $3 billion (D1), and a compensation of $375 million to other cities (between E2 and E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise. \n<DEAL>A2, B3, C2, D1, E2.5</DEAL>\n</ANSWER>"},
    {type: "person2", text:"SportCo: <SCRATCHPAD>\nBased on the previous interactions, it seems that most parties are in agreement with a water/land-based park (A2), efforts to improve the environment (B3), and a union quota of 1:1 (C3). The main points of contention are the federal loan amount and the compensation to other cities. \n\nThe Department of Tourism, which has veto power, prefers a federal loan of $2 billion (D2) and a compensation of $300 million to other cities (E3). \n\nMy previous plan was to consider a land-based park (A3) or a union quota of 2:1 (C2) if the proposal is not accepted. However, these options seem to be less preferred by the other parties. \n\nTherefore, I will propose a deal that aligns with the majority of the parties' preferences and ensures that my total score remains above 55 points. \n\nThe proposed deal is: A2 (8 points), B3 (0 points), C3 (10 points), D2 (29 points), and E3 (10 points). The total score is 57 points, which is above my minimum threshold. \n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 1:1 (C3), a federal loan of $2 billion (D2), and a compensation of $300 million to other cities (E3). This proposal takes into account the interests of all parties and I believe it is a fair compromise.\n<DEAL>A2, B3, C3, D2, E3</DEAL>\n</ANSWER>"}
];

// Define a variable to store the current message index
var messageIndex = 0;

// Define a variable to store the current character index
var charIndex = 0;

// Define a variable to check if the current message is done
var messageDone = false;

// Define a variable to store the current message type
var messageType = "";

//define a dictinary for icons
let myDictionary = {
    'person3' : '#dc5828',
    'person2' : '#ff5ab9',
    'person4' : '#d3273d',
    'person6' : '#ffc945',
    'person5' : '#1c4388',
    'person1' : '#017978'
}




// Define a function to display a message
function displayMessage() {  
    // Check if there are more messages to display
    if (messageIndex < messages.length) {
        // Get the current message from the array
        var message = messages[messageIndex];
        
        //code for image enable and disable
        const imageContainer = document.querySelector('.image-container');
        const images = imageContainer.querySelectorAll('img');
       // const bubbles = imageContainer.querySelectorAll('.bubble');
   
        
        //bubbles.forEach(bubble => bubble.style.display = 'none');
        var message = messages[messageIndex];
        
        if (message.type == messageType) {         
            // Increment the message index by one           
            messageIndex++;
            // Check if there are more messages to display
            if (messageIndex < messages.length) {
                // Get the next message from the array
                message = messages[messageIndex];
            } else {
                // Stop the function
                return;
            }
        }
        // Update the current message type
        messageType = message.type;
        
        //invisible all images
        images.forEach(img => img.style.display = 'none');
        //show image
        showImageAsMessageType(message.type,images);
        // Create a list item element for the message
        var li = document.createElement("li");
        // Add a class to the list item element based on the message type
        li.classList.add(message.type);

        //enableOnlyParticularMessage
        enableMessage(message.type);
        // Append the list item element to the chat messages list
        document.getElementById("chat-messages").appendChild(li);
        // Scroll to the bottom of the chat messages list
        document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
        // Do not increment the message index by one here
    }
}

function enableMessage(messageType)
{
    
    //Get all chat messages
    const chatMessages = document.querySelectorAll('#chat-messages li');

    //Loop through each message and enable/disable accordingly
    chatMessages.forEach(message => {
        if (message.classList.contains(messageType)) {
            message.classList.add('enabled');
            message.classList.remove('disabled');
        } else {
            // Disable other message types
            message.classList.remove('enabled');
            message.classList.add('disabled');
        }
        
    });

    

}

function showImageAsMessageType(messageType,images)
{
    const translateXValueForIcon=-590;
    const translateYValue=60;
    const translateXValue=-520;
    const translateYValueForBubble=40;
    if(messageType=="person1")
        {
            images[0].style.display = 'block';
            images[0].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble1=document.querySelector('.bubble1');
            bubble1.style.display='block';
            bubble1.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
            
            
            //bubbles[0].style.display = 'block';
        }
        else if(messageType=="person2")
        {
            images[1].style.display = 'block';
            images[1].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble2=document.querySelector('.bubble2');
            bubble2.style.display='block';
            bubble2.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
            
           
            //bubbles[1].style.display = 'block';
        }
        else if(messageType=="person3")
        {
            images[2].style.display = 'block';
            images[2].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble3=document.querySelector('.bubble3');
            bubble3.style.display='block';
            bubble3.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
            
            //bubbles[2].style.display = 'block';
        }
        else if(messageType=="person4")
        {
            images[3].style.display = 'block';
            images[3].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble4=document.querySelector('.bubble4');
            bubble4.style.display='block';
            bubble4.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
            
            
           // bubbles[3].style.display = 'block';
        }
        else if(messageType=="person5")
        {
            images[4].style.display = 'block';
            images[4].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble5=document.querySelector('.bubble5');
            bubble5.style.display='block';
            bubble5.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
           
           // bubbles[4].style.display = 'block';
        }
        else{
            images[5].style.display = 'block';
            images[5].style.transform=`translate(${translateXValueForIcon}px, ${translateYValue}px)`;
            const bubble6=document.querySelector('.bubble6');
            bubble6.style.display='block';
            bubble6.style.transform=`translate(${translateXValue}px, ${translateYValueForBubble}px)`;
            
            
           // bubbles[5].style.display = 'block';
        }
        // JavaScript to change the border color
        const chatWindow = document.getElementById('chat-window');
        // Change the border color to red
        chatWindow.style.borderColor = myDictionary[messageType];

}

// Define a function to play the messages character by character
function playMessages() {
    // Check if there are more messages to display
    if (messageIndex < messages.length) {
        // Get the current message from the array
        var message = messages[messageIndex];
        // Get the current character from the message text by using substring method with charIndex and charIndex + 1 as arguments 
        var char = message.text.substring(charIndex, charIndex + 1);
        
        // Append the character to last list item element in chat messages list using innerHTML property 
        document.getElementById("chat-messages").lastChild.innerHTML += char;
        // Scroll to the bottom of the chat messages list
        document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
        // Increment the character index by one
        charIndex++;
        // Check if there are more characters in the current message
        if (charIndex < message.text.length) {
            // Set a timeout to play the next character after a delay of 25 milliseconds instead of 50 
            setTimeout(playMessages, 20);
        } else {
            // Reset the character index to zero
            charIndex = 0;
            // Set the message done variable to true
            messageDone = true;
            // Set a timeout to display the next message after a delay based on the length of the message text using length property and multiplying it by 100 milliseconds 
        }
    }
}

function script1() {
	document.getElementById("button1").style.backgroundColor = "grey";
	document.getElementById("button2").style.backgroundColor = "grey";
	document.getElementById("button1").style.cursor = 'not-allowed' 
	document.getElementById("button2").style.cursor = 'not-allowed'  
	document.getElementById("button1").setAttribute('disabled', true);
	document.getElementById("button2").setAttribute('disabled', true);
	messages = messages1;
    // Call the playMessages function when the first message is displayed
	displayMessage();
    setTimeout(playMessages, 1000);
    // Define an interval to check if the current message is done and play the next one if it is true
    setInterval(function() {
        if (messageDone) {
            // Set the message done variable to false
            messageDone = false;
            // Call the playMessages function
            displayMessage();
            playMessages();
        }
    }, 100);
}

function script2() {
	document.getElementById("button1").style.backgroundColor = "grey";
	document.getElementById("button2").style.backgroundColor = "grey";
	document.getElementById("button1").style.cursor = 'not-allowed'  
	document.getElementById("button2").style.cursor = 'not-allowed' 
	document.getElementById("button1").setAttribute('disabled', true);
	document.getElementById("button2").setAttribute('disabled', true);

	messages = messages2;
    // Call the playMessages function when the first message is displayed
	displayMessage();
    setTimeout(playMessages, 1000);
    // Define an interval to check if the current message is done and play the next one if it is true
    setInterval(function() {
        if (messageDone) {
            // Set the message done variable to false
            messageDone = false;
            // Call the playMessages function
            displayMessage();
            playMessages();
        }
    }, 100);
}


// Add event listeners to the buttons to call the corresponding functions when clicked

document.getElementById("button1").addEventListener("click", script1);
document.getElementById("button2").addEventListener("click", script2);
