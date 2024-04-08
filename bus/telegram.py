import requests

url = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139"
key = "z8Cqw8DlRD+U/Kye/3pFfw=="
payload = {}

try:
    response = requests.get(url, headers={'AccountKey': key}, data=payload)
    response.raise_for_status()
    
    # access JSOn content
    jsonResponse = response.json()

    print("Print each key-value pair from JSON response")
    for key, value in jsonResponse.items():
        print("xxxxxxxx")
        print(key, ":", value)
        print("\n")

    
    print(response.text)
    print(payload)

except:
    print("Error")

#except HTTPError as http_err:
#    print(f'HTTP error occurred: {http_err}')
#except Exception as err:
#    print(f'Other error occurred: {err}')