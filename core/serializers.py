from rest_framework import serializers
from core.models import Address, ContactInfo, SocialAccount

class SocialAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialAccount
        fields = "__all__"


class AddressSerializer(serializers.ModelSerializer):
    use = serializers.ChoiceField(choices=Address.AddressUse.choices)
    class Meta:
        model = Address
        fields = "__all__"



class ContactInfoSerializer(serializers.ModelSerializer):
    use = serializers.ChoiceField(choices=ContactInfo.ContactInfoUse.choices)
    class Meta:
        exclude = ("social",)
        model = ContactInfo
        